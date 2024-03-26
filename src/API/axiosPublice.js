import axios from "axios";

const axiosPublice = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});
export default axiosPublice;