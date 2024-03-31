import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_Publishable);
const Payment = () => {

    return (
        <div className='p-5'>
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;