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
                            <Link as={NextLink} href='/'
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
                            <Link as={NextLink} href='/'
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
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >My profile</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Settings</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Logout</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <nav
                className=" flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="relative ml-3" data-te-dropdown-ref>
                        <a
                            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                className="rounded-full"
                                style={{height: '22px', width: '22px'}}
                                alt="Avatar"
                                loading="lazy" />
                            <span className="w-2 pl-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="absolute left-0 right-auto z-[1000] float-left m-0 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton2"
                            data-te-dropdown-menu-ref>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref
                                >My profile</a
                                >
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref
                                >Settings</a
                                >
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref
                                >Logout</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}

export default DesktopNav