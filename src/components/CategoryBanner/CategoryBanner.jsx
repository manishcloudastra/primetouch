"use client"
import { lato, playfair } from "@/app/font";
import Image from "next/image";
import { default as Link, default as NextLink } from 'next/link';
import React from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';

const CategoryBanner = ({ backgroundClass, scrollID }) => {
    return (
        <div className={`relative bg-center bg-cover ${backgroundClass}`}>
            <div className="flex flex-col mx-auto home--content" >
                <div className="container flex justify-start mx-auto h-96 md:box--top">
                    <div className="flex flex-col gap-6 w-[90%] md:w-[70%] lg:w-7/12 h-[60%] md:h-1/2 mt-auto text-black " >
                        <p className={" uppercase " + lato.className}>made in Indonesia, dedicated to Indonesia</p>
                        <h1 className={"text-4xl uppercase md:text-5xl lg:text-7xl font-semibold !leading-[1.1] " + playfair.className} >Discover the Art of Dressing Up</h1>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-center bottom-0 w-full pb-4 mt-auto text-black ">
                <Link as={NextLink} href={`#${scrollID}`} className={`flex items-center space-x-2 ` + lato.className}>
                    <p className='uppercase text-sm  lg:text-base' >scroll down</p>
                    <RxDoubleArrowDown className="text-sm  lg:text-base " />
                </Link>
            </div>
        </div>
    )
}

export default CategoryBanner