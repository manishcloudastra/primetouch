'use client'
import { bodoni, lato } from '@/app/font';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { default as Link, default as NextLink } from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgChevronDown, CgChevronUp, CgProfile } from 'react-icons/cg';
import { HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';
import { Search } from '../Search/Search';

const DesktopNav = () => {
    const [btnStyle, setBtnStyle] = useState('register')

    useEffect(() => {
        const init = async () => {
            const { Dropdown, initTE } = await import("tw-elements");
            initTE({ Dropdown });
        };
        init();
    }, []);

    return (
        <div className='hidden lg:block relative' >
            <div className='w-[100vw] top-0 left-0 fixed z-20' >
                <div className='flex flex-col'>
                    <div className={`flex items-center justify-between item p-6 bg-primetouch px-12`}>
                        <div className={bodoni.className + ' xl:pl-8'}>
                            <Link as={NextLink} href='/' className={`text-2xl xl:text-3xl uppercase text-white`} >PRIMETOUCH</Link>
                        </div>
                        <div>
                            <Search />
                        </div>
                        <div className={`xl:pr-1 data-te-navbar-ref flex justify-center items-center text-white space-x-4 lg:space-x-6 ` + lato.className} >
                            <Link as={NextLink} href='/'>
                                Home
                            </Link>
                            <Link as={NextLink} href='/contact'>

                                Contact
                            </Link>
                            <Link as={NextLink} href='/about'>

                                About
                            </Link>
                            <Link as={NextLink} href='/cart'
                                className="hidden-arrow flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                role="button">

                                <span className="w-5">
                                    <HiOutlineShoppingCart size={22} color='white' />
                                </span>

                                <span
                                    className="absolute -mt-5 min-w-[4] flex justify-center items-center ml-3 w-4 h-4 rounded-full bg-danger p-1 text-[0.6rem] font-bold leading-none text-white"
                                >1</span
                                >
                            </Link>
                            <Link as={NextLink} href='/wishlist'
                                className="hidden-arrow flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                role="button">

                                <span className="w-full">
                                    <HiOutlineHeart size={22} color='white' />
                                </span>
                                <span
                                    className="absolute -mt-5 min-w-[4] flex justify-center items-center ml-3 w-4 h-4 rounded-full bg-danger p-1 text-[0.6rem] font-bold leading-none text-white"
                                >1</span
                                >
                            </Link>

                            <div className="relative ml-3 hover:text-primetouch-light" data-te-dropdown-ref>
                                <a
                                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false">
                                    <span className="w-5">
                                        <CgProfile size={22} color='white' />
                                    </span>
                                    <div className='mt-2 p-1'>
                                        <CgChevronDown />
                                    </div>
                                </a>
                                <ul
                                    className="absolute left-0 right-auto z-[1000] float-left m-0 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg  [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton2"
                                    data-te-dropdown-menu-ref>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400"
                                            href="/login"
                                            data-te-dropdown-item-ref
                                        >Sign In</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400"
                                            href="/register"
                                            data-te-dropdown-item-ref
                                        >Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopNav