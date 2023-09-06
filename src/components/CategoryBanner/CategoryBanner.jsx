"use client"
import { lato, playfair } from "@/app/font";
import Image from "next/image";
import { default as Link, default as NextLink } from 'next/link';
import React from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';

const CategoryBanner = ({ backgroundClass, scrollID }) => {
    return (
        <div className={`bg-center bg-cover ${backgroundClass}`}>
            <div className="flex flex-col mx-auto home--content" >
                <div className="container flex justify-start mx-auto box--top">
                    <div className=" w-[90%] md:w-[70%] lg:w-7/12 h-[60%] md:h-1/2 mt-auto text-black " >
                        <p className={" uppercase " + lato.className}>made in Indonesia, dedicated to Indonesia</p>
                        <h1 className={"text-4xl uppercase md:text-5xl lg:text-7xl font-semibold !leading-[1.1] " + playfair.className} >Discover the Art of Dressing Up</h1>
                    </div>
                </div>
            </div>
            <div className="items-center justify-center hidden h-full pb-2 mt-auto text-black lg:flex">
                <Link as={NextLink} href={`${scrollID}`} className={`flex items-center space-x-2 ` + lato.className}>
                    <p className='uppercase z-50 ' >scroll down</p>
                    <RxDoubleArrowDown className="text-xl " />
                </Link>
            </div>
        </div>
    )
}

export default CategoryBanner