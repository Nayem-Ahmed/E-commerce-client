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
import { useQuery } from 'react-query';
import { getCartData, deleteCart, incrementQuantity, decrementQuantity } from '../API/products';
import Loader from '../Components/Loader/Loader';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const { user } = useAuth();
    const { data: cartData, isLoading, isError, refetch } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: () => getCartData(user?.email),
    });

    // const handleUpdateQuantity = async (itemId, newQuantity, prevQuantity) => {
    //     try {
    //         console.log(itemId, newQuantity, prevQuantity);
    //         await incrementQuantity(itemId)
    //     } catch (error) {
    //         console.error('Error updating quantity:', error);
    //     }
    // };
    const handleUpdateQuantity = async (itemId, newQuantity, prevQuantity) => {
        try {
            const diff = newQuantity - prevQuantity;
            if (diff > 0) {
                await incrementQuantity(itemId, diff); // Increment quantity
            } else if (diff < 0) {
                await decrementQuantity(itemId, -diff); // Decrement quantity
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const totalPrice = cartData?.reduce((total, item) => total + (item.new_price * item.quantity), 0);


    const handleRemoveItem = async (itemId) => {
        await deleteCart(itemId)
        refetch();
        toast.success('Item removed successfully.');
    };

    if (isLoading) return <Loader />;
    if (isError) return <div>Error occurred while fetching cart data</div>;
    const isCartEmpty = !cartData || cartData.length === 0;

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <main className=" mx-auto ">
                <div className="bg-white rounded  overflow-hidden">
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
                        <tbody className='border-b'>
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
                                            onChange={(e) => handleUpdateQuantity(item._id, e.target.value, item.quantity)}
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
                        <span className="ml-2 mb-2 sm:mb-0">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-end px-4 py-2">
                        {/* <button className="bg-gray-800 text-white px-4 py-2 rounded mr-2">Clear Cart</button> */}
                        <Link to='/payment'>
                            <button
                                disabled={isCartEmpty}
                                className={`bg-[#eb2f06] text-white px-4 py-2 rounded ${isCartEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                                title={isCartEmpty ? 'Your cart is empty' : ''}> Proceed to Checkout </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyCart;


