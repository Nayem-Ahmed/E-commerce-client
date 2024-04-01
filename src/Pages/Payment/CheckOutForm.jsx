import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import axiosPublice from '../../API/axiosPublice';
import { getCartData } from '../../API/products';
import { useQuery } from 'react-query';
import useAuth from '../../API/useAuth';
import axios from 'axios';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('');
    const [transid, setTransid] = useState('');
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");

    const { data: cartData, isLoading, isError, refetch } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: () => getCartData(user?.email),
    });

    const totalPrice = cartData?.reduce((total, item) => total + (item.new_price * item.quantity), 0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosPublice.post('/create-payment-intent', { price: totalPrice });
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Error creating payment intent:', error);
            }
        };

        if (totalPrice) {
            fetchData();
        }
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements || !cartData || cartData.length === 0) {
            // Stripe.js has not loaded yet or cartData is empty. Disable form submission.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErr(error.message);
            return;
        }

        console.log('[PaymentMethod]', paymentMethod);
        // You can handle successful payment here
        setErr('');

        // Confirm payment
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email,
                },
            },
        });

        if (paymentError) {
            console.error('Error confirming card payment:', paymentError);
            // Handle the payment confirmation error here
            return;
        }

        console.log('Payment confirmed:', paymentIntent);
        setTransid(paymentIntent.id);

        // Save payment history in database for each item in cartData
        cartData?.map(async (item, index) => {
            const savePayment = {
                name: user?.displayName,
                email: user?.email,
                price: totalPrice,
                itemName: item.name,
                category: item.category,
                new_price: item.new_price,
                status: 'pending',
            };

            try {
                const response = await axiosPublice.post('/payment_history', savePayment);
                console.log(`Payment history saved successfully for item ${index + 1}:`, response.data);
                // Handle success, if needed
            } catch (error) {
                console.error(`Error saving payment history for item ${index + 1}:`, error);
                // Handle error, if needed
            }
        });
    };


    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Payment Information</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mb-4 text-gray-700">
                    Card Information
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </label>
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="w-full bg-[#eb2f06] text-white px-6 py-2 mt-7 rounded-md transition duration-300 ease-in-out hover:bg-[#ff583f] focus:outline-none "
                >
                    Pay Now
                </button>
                <p className='text-red-500'>{err}</p>
                <p className='text-green-500'>{transid}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;

