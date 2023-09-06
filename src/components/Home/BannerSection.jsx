"use client"
import { lato, playfair } from "@/app/font";
import Image from "next/image";
import { default as Link, default as NextLink } from 'next/link';
import React from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';

const BannerSection = () => {
    return (
        <div className="bg-center bg-cover bg--landing">
            <div className="flex flex-col mx-auto home--content" >
                <div className="flex justify-start box--top container mx-auto">
                    <div className=" w-[90%] md:w-[70%] lg:w-7/12 h-[60%] md:h-1/2 mt-auto text-white " >
                        <p className={"uppercase " + lato.className}>made in Indonesia, dedicated to Indonesia</p>
                        <h1 className={"text-4xl uppercase md:text-5xl lg:text-7xl font-semibold !leading-[1.1] " + playfair.className} >Discover the Art of Dressing Up</h1>
                    </div>
                </div>
                <div className="flex justify-end box--bottom">
                    <div className="  w-[90%] md:w-[70%] lg:w-4/12">
                        <div className="p-2 dynamic--box--top" >
                            <div className="flex w-full h-full shadow-md">
                                <div className="relative w-1/3">
                                    <Image src="/images/dynamic-image.png" sizes="(max-width: 640px) 100vw, 50vw" alt="Dynamic Product" fill style={{objectFit:"cover"}} />
                                </div>
                                <div className="w-2/3 p-2 bg-white lg:p-4">
                                    <div className="flex flex-col justify-between h-full">
                                        <h1 className={"text-base md:text-lg lg:text-2xl " + playfair.className} >Product Name in Here</h1>
                                        <div className={"text-sm " + lato.className}>INR 300.000</div>
                                        <p className={"text-xs underline underline-offset-4 " + lato.className}>SHOP NOW</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 dynamic--box--bottom ">
                            <div className="flex w-full h-full shadow-md">
                                <div className="w-2/3 p-2 bg-white lg:p-4">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className={"text-base md:text-lg lg:text-2xl " + playfair.className} >Product Name in Here</div>
                                        <div className={"text-sm " + lato.className}>INR 300.000</div>
                                        <p className={"text-xs underline underline-offset-4 " + lato.className}>SHOP NOW</p>
                                    </div>
                                </div>
                                <div className="relative w-1/3">
                                    <Image src="/images/dynamic-image.png" sizes="(max-width: 200px) 100vw, 50vw" alt="Dynamic Product" fill style={{objectFit:"cover"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center justify-center hidden pb-2 text-white lg:flex">
                <Link as={NextLink} href='#categorySection' className={`flex items-center space-x-2 ` + lato.className}>
                    <p className='uppercase' >scroll down</p>
                    <RxDoubleArrowDown className="text-xl " />
                </Link>
            </div>
        </div>
    )
}

export default BannerSection