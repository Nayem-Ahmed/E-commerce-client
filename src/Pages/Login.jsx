import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        // You can perform further actions here, such as sending the form data to an API
        console.log('Form submitted:', formData);
    };
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-10">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 p-2" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 p-2" />
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#eb2f06] hover:bg-black">
                        Login
                    </button>
                    <p className="text-sm text-gray-600 mt-2">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;