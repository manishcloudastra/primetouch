"use client"
import { inter, poppins } from '@/app/font'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const handleGoogleClick = (e) => {
        e.preventDefault()
        alert('Google Sign Up')
    }

    const initialFormValues = {
        name: '',
        email: '',
        password: '',
    };


    const [formValues, setFormValues] = useState(initialFormValues);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const isAnyFieldEmpty = () => {
        return Object.values(formValues).some((value) => value === '');
    };

    const handleCreateAccountClick = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formValues));
        setTimeout(() => {
            setFormValues(initialFormValues);
            setIsFormValid(false);
        }, 800);
    };

    useEffect(() => {
        setIsFormValid(!isAnyFieldEmpty());
    }, [formValues]);

    return (
        <section className="container mx-auto" >

            <div className="px-6 py-14 ">
                <div className="flex flex-wrap items-center justify-center h-full g-6 lg:justify-between md:gap-8 lg:gap-0">
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-7/12">
                        <img
                            src="/images/createAccount.png"
                            className="w-full"
                            alt="Phone image" />
                    </div>

                    <div className="w-full md:w-8/12 lg:ml-6 lg:w-4/12">
                        <div className='flex flex-col space-y-2'>
                            <h1 className={'text-3xl font-medium tracking-wide ' + inter.className}>Create an account</h1>
                            <p className={'text-sm ' + poppins.className}>Enter your details below</p>
                        </div>

                        <form className={poppins.className} onSubmit={handleCreateAccountClick}>
                            <div className="relative z-0 my-6">
                                <input autoComplete='off' type="text" id="name" name='name' value={formValues.name} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primetouch peer" placeholder=" " />
                                <label htmlFor="name" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primetouch peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>
                            <div className="relative z-0 my-6">
                                <input autoComplete='off' type="email" id="email" name='email' value={formValues.email} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primetouch peer" placeholder=" " />
                                <label htmlFor="email" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primetouch peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                            </div>
                            <div className="relative z-0 my-6">
                                <input type="password" id="password" name='password' value={formValues.password} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primetouch peer" placeholder=" " />
                                <label htmlFor="password" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primetouch peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className="inline-block font-medium w-full rounded mt-2 bg-primetouch px-7 py-4 text-sm leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-50 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                <span className='text-white'>Create Account</span>
                            </button>

                            <div className="flex flex-col items-center mt-8">
                                <button onClick={handleGoogleClick} className="w-full rounded delay-50 mb-2 flex items-center justify-center space-x-4 border border-[#00000066] bg-white px-3 py-3 transition ease-in-out hover:bg-gray-100 hover:shadow-md focus:outline-none focus:ring-1 focus:ring-primetouch focus:ring-opacity-50 ">
                                    <svg viewBox="0 0 48 48" width="24" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>Google-color</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs></defs>
                                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                                        <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                                                        <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                                                        <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path>
                                                        <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="font-medium text-gray-700">Sign up with Google</span>
                                </button>
                                <p className="mt-3 text-center text-[14px]">
                                    Already have an account? &nbsp;
                                    <Link href="/login" className="text-gray-600 underline underline-offset-2">Log In</Link>
                                </p>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default page