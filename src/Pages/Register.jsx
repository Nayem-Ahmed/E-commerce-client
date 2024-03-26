import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProviders';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                avatar: e.target.avatar.files[0] // Access the selected file

            };
            console.log(formData);

        } catch (error) {
            console.error('Error occurred while handling form submission:', error);

        }
    };

    const googleLogin = async () => {
        try {

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-6">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" required className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" required className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
                    <input type="file" id="avatar" name="avatar" required className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4  rounded-md shadow-sm text-sm font-medium text-white bg-[#eb2f06] hover:bg-black">
                        Register
                    </button>
                    <i className="divider">OR</i>
                    <button onClick={googleLogin} className="btn btn-block btn-outline">
                        <FcGoogle className="text-2xl" /> Continue With Google
                    </button>
                </div>
            </form>
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;