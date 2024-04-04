import axiosPublice from "./axiosPublice"

// Fetch allproducts from db
export const getAllProducts = async (sorting,search) => {
    const { data } = await axiosPublice(`/allproducts?sort=${sorting}&search=${search}`)
    return data;
}
// add cart post
export const addCart = async (cartData) => {
    const { data } = await axiosPublice.post('/addcart', cartData)
    return data;
}
// cart data fetch
export const getCartData = async (email) => {
    const { data } = await axiosPublice(`/addcart/${email}`)
    return data;
}
// increment quantity
export const incrementQuantity = async (id) => {
    // const { data } = await axiosPublice.patch(`/increment_quantity`,id)
    const { data } = await axiosPublice.patch(`/increment_quantity/${id}`);

    return data;
}
// decrement quantity
export const decrementQuantity = async (id) => {
    const { data } = await axiosPublice.patch(`/decrement_quantity/${id}`);
    return data;
}

//Delete  add cart
export const deleteCart = async (deletecart) => {
    const { deletedata } = await axiosPublice.delete(`/addcart/${deletecart}`)
    return deletedata;
}
// wishlist
export const AddWishlistPost = async (wishlistdata) => {
    const { addData } = await axiosPublice.post('/wishlist', wishlistdata)
    return addData;
}
// Get wishlists by params
export const getWishList = async (email) => {
    const { data } = await axiosPublice(`/wishlist/${email}`)
    return data;
}
// get payment history
export const getPaymentData = async (email) => {
    const { data } = await axiosPublice(`/payment_history/${email}`)
    return data;
}
