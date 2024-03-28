// import React from 'react';
// import useAuth from '../API/useAuth';
// import { useQuery } from 'react-query';
// import { getCartData } from '../API/products';

// const MyCart = () => {
//     const { user } = useAuth();
//     const { data: cartData ,isLoading, isError ,refetch} = useQuery({
//         queryKey: ['cartData', user?.email],
//         queryFn: async () => getCartData(user?.email),
//     });
//     console.log(cartData);

// if (isLoading) return <div><Loader></Loader></div>;
// if (isError) return <div>Error occurred while fetching cart data</div>;

//     return (
//         <div>
//             sss
//         </div>
//     );
// };

// export default MyCart;

import React from 'react';
import useAuth from '../API/useAuth';
import { useQuery, useMutation } from 'react-query';
import { getCartData, deleteCart } from '../API/products';
import Loader from '../Components/Loader/Loader';
import { toast } from 'react-toastify';

const MyCart = () => {
    const { user } = useAuth();
    const { data: cartData, isLoading, isError, refetch } = useQuery(['cartData', user?.email], () => getCartData(user?.email));

    const handleUpdateQuantity = async (itemId, newQuantity) => {
        try {
            await updateQuantityMutation.mutateAsync({ itemId, newQuantity });
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const getTotalAmount = () => {
        if (!cartData) return 0;
        return cartData.reduce((total, item) => total + (item.new_price * item.quantity), 0);
    };
    const handleRemoveItem =async (itemId) => {
        await deleteCart(itemId)
        refetch();
        toast.success('Item removed successfully.');
    };

    if (isLoading) return <Loader />;
    if (isError) return <div>Error occurred while fetching cart data</div>;

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto py-6">
                <div className="bg-white rounded shadow overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 hidden sm:table-cell">Product</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData?.map(item => (
                                <tr key={item._id}>
                                    <td className="flex items-center px-4 py-2 hidden sm:table-cell">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-4" />
                                        <span>{item.name}</span>
                                    </td>
                                    <td className="px-4 py-2">${item.new_price}</td>
                                    <td className="px-4 py-2">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                                            className="w-16 px-2 py-1 border rounded focus:outline-none"
                                        />
                                    </td>
                                    <td className="px-4 py-2">${(item.new_price * item.quantity).toFixed(2)}</td>
                                    <td className="px-4 py-2">
                                        <button className="text-red-600 hover:text-red-700" onClick={() => handleRemoveItem(item._id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex flex-col sm:flex-row justify-end items-center px-4 py-2">
                        <span className="font-semibold">Total:</span>
                        <span className="ml-2 mb-2 sm:mb-0">${getTotalAmount().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-end px-4 py-2">
                        <button className="bg-gray-800 text-white px-4 py-2 rounded mr-2">Clear Cart</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyCart;


