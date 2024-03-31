import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import axiosPublice from '../../API/axiosPublice';
import { useQuery } from 'react-query';
import useAuth from '../../API/useAuth';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('');
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");

    const { data: cartData, isLoading, isError, refetch } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => {
            const response = await axiosPublice.post('/create-payment-intent', { price: getTotalPrice() });
            return response.data;
        },
    });

    const getTotalPrice = () => {
        if (!cartData) return 0;
        return cartData.reduce((total, item) => total + (item.new_price * item.quantity), 0);
    };

    useEffect(() => {
        if (!isLoading && !isError && cartData) {
            const fetchData = async () => {
                try {
                    const totalPrice = getTotalPrice();
                    const response = await axiosPublice.post('/create-payment-intent', { price: totalPrice });
                    setClientSecret(response.data.clientSecret);
                } catch (error) {
                    console.error('Error creating payment intent:', error);
                    // Handle error
                }
            };

            fetchData();
        }
    }, [axiosPublice, cartData, isLoading, isError]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error('[error]', error);
            setErr(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErr('');
        }
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
                    disabled={!stripe || !clientSecret || isLoading || isError || !cartData}
                    className="w-full bg-[#eb2f06] text-white px-6 py-2 mt-7 rounded-md transition duration-300 ease-in-out hover:bg-[#ff583f] focus:outline-none"
                >
                    Pay Now
                </button>
                <p className='text-red-500'>{err}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;
