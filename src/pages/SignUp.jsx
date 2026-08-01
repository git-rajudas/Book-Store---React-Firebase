
import { useState } from 'react';
import { signUp, signInWithGoogle } from '../services/auth.services'
import { addUser, updateUserProfile } from '../services/user.services';

import { RiGoogleFill } from '@remixicon/react'
import Navbar from '../components/Navbar';
function SignUp() {

    const [name, setName ] = useState(null);
    const [Number, setPhoneNumber ] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    console.log(Number);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signUp(email, password);
        console.log(user);
        await addUser({
            uid: user.uid,
            displayName: name || "",
            photoURL: user.photoURL || "",
            email: user.email,
            Number,
        })
        await updateUserProfile(user, name, Number);
    }

    return (
        <div className='w-full h-fit'>
            <Navbar />
            <section className="text-gray-600 body-font h-10/12 w-full mt-40 mb-40 justify-center items-center flex">
               
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg py-10 px-15 flex flex-col  w-full mt-10 md:mt-0 shadow-[0px 10px 15px -3px] shadow-(color:rgb (0,0,0.1));">
                        <h2 className="text-gray-900 text-2xl font-medium title-font mb-10 mt-5 text-center ">Create Your Account</h2>
                        
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="name" name="name" required className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        
                        <div className="relative mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                            <input type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required  id="phone" name="phone" className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPhoneNumber(e.target.value)}></input>
                        </div>
                        
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" required className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-2xl text-lg cursor-pointer" onClick={handleSubmit}>Sign Up</button>
                            <button className="text-black bg-white border-0 py-2 px-8 focus:outline-none rounded-2xl text-lg cursor-pointer flex gap-2 justify-center items-center" onClick={() => signInWithGoogle()}>Continue With <RiGoogleFill /></button>
                        </div>
                        {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                    </div>
               
            </section>
            <div className='bg-amber-100 w-full h-1/5 flex justify-center items-center'>Copy</div>
        </div>
    )
}

export default SignUp
