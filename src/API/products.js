import axiosPublice from "./axiosPublice"

// Fetch allproducts from db
export const getAllProducts = async () => {
    const { data } = await axiosPublice('/allproducts')
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