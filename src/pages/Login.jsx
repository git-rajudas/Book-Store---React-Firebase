import { useState } from 'react';
import { RiGoogleFill } from '@remixicon/react'
import { NavLink } from 'react-router';
import { signIn, signInWithGoogle } from '../services/auth.services'

import { useAuth } from '../context/AuthContext';
function Login() {

    const {user } = useAuth();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn(email, password);
    }



    return (
        <div className="w-full h-full">

            <section className="text-gray-600 body-font h-10/12 w-full flex justify-center items-center">

                <div className="justify-center flex flex-wrap items-center w-full">
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg py-10 px-15 flex flex-col  w-full mt-10 md:mt-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)];">
                        <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Login In</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-2xl text-lg cursor-pointer" onClick={handleSubmit}>Sign In</button>
                            <button className="text-black bg-white border-0 py-2 px-8 focus:outline-none rounded-2xl text-lg cursor-pointer flex gap-2 justify-center items-center" onClick={() => signInWithGoogle()}>Continue With <RiGoogleFill /></button>
                        </div>
                             <p className="text-base text-gray-500 mt-5 text-center">Don't have an account? <NavLink to={'/signup'} className='text-yellow-500'>Sign Up</NavLink></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
