import React from 'react';
import useAuth from '../API/useAuth';
import { useQuery } from 'react-query';
import { getCartData } from '../API/products';

const MyCart = () => {
    const { user } = useAuth();
    const { data: cartData ,refetch} = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => getCartData(user?.email),
    });
    console.log(cartData);

    return (
        <div>
            sss
        </div>
    );
};

export default MyCart;