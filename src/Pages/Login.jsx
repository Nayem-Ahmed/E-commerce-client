import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import useAuth from '../API/useAuth';

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const handleSubmit = async (e) => {
        e.preventDefault();
            const email = e.target.email.value
            const password = e.target.password.value
        try {
            const user = await signIn(email, password);
            toast.success('Login successfully!')
            navigate(location?.state ? location.state : '/');

        } catch (error) {
            console.error('Error occurred while handling form submission:', error);

        }
    };

    const googleLogin = async () => {
        try {
            console.log(' ');

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-6">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1   block w-full shadow-sm sm:text-sm border-gray-300 p-2" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" required className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 p-2" />
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#eb2f06] hover:bg-black">
                        Login
                    </button>
                    <i className="divider">OR</i>
                    <button onClick={googleLogin} className="btn btn-block btn-outline">
                        <FcGoogle className="text-2xl" /> Continue With Google
                    </button>
                    <p className="text-sm text-gray-600 mt-2">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;