'use client'
import { bodoni, tenor } from '@/app/font';
import { default as Link, default as NextLink } from 'next/link';
import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';

const MobileNav = () => {
    const [btnStyle, setBtnStyle] = useState('register')
    const [displayProp, setDisplayProp] = useState('hidden')

    return (
        <div className='block lg:hidden' >
            <div className='w-[100vw]   top-0 left-0 fixed z-20' >
                <div className='flex flex-col'>
                    <div className={`flex items-center justify-between item p-6 ${displayProp === 'hidden' ? 'bg-primetouch' : 'bg-white'} px-8 md:px-12`}>
                        <div className={bodoni.className}>
                            <Link as={NextLink} href='/' className={`text-2xl uppercase ${displayProp === 'hidden' ? 'text-white' : 'text-primetouch'}`} >PRIMETOUCH</Link>
                        </div>
                        <div className={`${displayProp === 'hidden' ? 'text-white' : 'text-primetouch'}`} >
                            {displayProp === 'block' ? <CgClose className='text-2xl' onClick={() => setDisplayProp('hidden')} /> : <CgMenuRight className='text-2xl' onClick={() => setDisplayProp('block')} />}
                        </div>
                    </div>

                    <div className={`px-6 ${displayProp} bg-white h-[100vh] px-8 md:px-12`} >
                        <div className={'flex flex-col mt-6 space-y-6 text-lg ' + tenor.className} >
                            <Link as={NextLink} href='/'>
                                Home
                            </Link>
                            <Link as={NextLink} href='/contact'>

                                Contact
                            </Link>
                            <Link as={NextLink} href='/about'>

                                About
                            </Link>
                            <Link as={NextLink} href='/'>

                                Men
                            </Link>
                            <Link as={NextLink} href='/'>
                                Women
                            </Link>
                        </div>

                        <div className='mt-12'>
                            <Link as={NextLink} href='/' onClick={() => setBtnStyle('login')} className={`px-4 py-2 mt-4 font-bold border-2 rounded-full border-primetouch ${btnStyle === 'login' ? 'bg-primetouch text-white' : ''}`}>
                                Login
                            </Link>
                            <p className='mt-12' ></p>
                            <Link as={NextLink} href='/' onClick={() => setBtnStyle('register')} className={`px-4 py-2 font-bold border-2 rounded-full border-primetouch ${btnStyle === 'login' ? '' : 'bg-primetouch text-white'} `}>
                                Register
                            </Link>
                        </div>

                        <div className='mt-12'>
                            <div className="flex space-x-4">
                                <Link as={NextLink} href='/'
                                    className="hidden-arrow flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    role="button">

                                    <span className="w-5">
                                        <BsPerson size={22} color='black' />
                                    </span>
                                </Link>
                                <Link as={NextLink} href='/'
                                    className="hidden-arrow flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    role="button">

                                    <span className="w-5">
                                        <HiOutlineShoppingCart size={22} color='black' />
                                    </span>

                                    <span
                                        className="absolute -mt-5 min-w-[4] flex justify-center items-center ml-3 w-4 h-4 rounded-full bg-danger p-1 text-[0.6rem] font-bold leading-none text-white"
                                    >1</span
                                    >
                                </Link>
                                <Link as={NextLink} href='/'
                                    className="hidden-arrow flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    role="button">

                                    <span className="w-5">
                                        <HiOutlineHeart size={22} color='black' />
                                    </span>

                                    <span
                                        className="absolute -mt-5 min-w-[4] flex justify-center items-center ml-3 w-4 h-4 rounded-full bg-danger p-1 text-[0.6rem] font-bold leading-none text-white"
                                    >1</span
                                    >
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MobileNav