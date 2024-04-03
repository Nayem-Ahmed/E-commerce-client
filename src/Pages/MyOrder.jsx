import React, { useEffect, useState } from 'react';
import { getPaymentData } from '../API/products';
import useAuth from '../API/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [paymentData, setPaymentData] = useState([]);
    console.log(paymentData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPaymentData(user?.email);
                setPaymentData(data);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className=" p-5 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>
        <ul>
            {paymentData.map((payment, index) => (
                <li key={index} className="border-b border-gray-300 py-4">
                    <p className="font-bold">Order ID: {payment._id}</p>
                    <p>Item Name: {payment.itemName}</p>
                    <p>Category: {payment.category}</p>
                    <p>Price: ${payment.price}</p>
                    <p>Status: {payment.status}</p>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default MyOrder;
