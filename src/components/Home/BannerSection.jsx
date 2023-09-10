"use client"
import { allProducts } from "@/app/(mock-data)/products";
import { lato, playfair } from "@/app/font";
import { Center, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { default as Link, default as NextLink } from 'next/link';
import React, { useEffect, useState } from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';

const BannerSection = () => {

    const [prod1, setProd1] = useState(null);
    const [prod2, setProd2] = useState(null);


    useEffect(() => {
        const getRandomProduct = () => {
            const randomIndex = Math.floor(Math.random() * allProducts.length);
            const randomProduct = allProducts[randomIndex];
            return randomProduct;
        };
        const res1 = getRandomProduct();
        let res2 = getRandomProduct();
        while (res2.id === res1.id) {
            res2 = getRandomProduct();
        }
        if (res1 && res2) {
            setProd1(res1);
            setProd2(res2);
        }
    }, []);

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
                        <Link href={`/${prod1?.category}/${prod1?.slug}`} >
                            <div className="p-2 dynamic--box--top" >
                                <div className="flex w-full h-full shadow-md">
                                    <div className="relative w-1/3">
                                        {prod1 == null ?
                                            <Center height="20vh"><Spinner size='md' color="#8B4513" /></Center>
                                            :
                                            <Image src={prod1?.imageSrc} sizes="(max-width: 640px) 100vw, 50vw" alt="Dynamic Product" fill className="object-cover object-top " />
                                        }
                                    </div>
                                    <div className="w-2/3 p-2 bg-white lg:p-4">
                                        <div className="flex flex-col justify-between h-full">
                                            <h1 className={"text-base md:text-lg lg:text-2xl " + playfair.className} >{prod1 == null ? <Center height="15vh"><Spinner size='md' color="#8B4513" /></Center> : prod1?.productName}</h1>
                                            <div className={"text-sm " + lato.className}>{prod1?.price}</div>
                                            <p className={"text-xs underline underline-offset-4 " + lato.className}>SHOP NOW</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={`/${prod2?.category}/${prod2?.slug}`}>
                            <div className="p-2 dynamic--box--bottom ">
                                <div className="flex w-full h-full shadow-md">
                                    <div className="w-2/3 p-2 bg-white lg:p-4">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className={"text-base md:text-lg lg:text-2xl " + playfair.className} >{prod2 == null ? <Center height="15vh"><Spinner size='md' color="#8B4513" /></Center> : prod2?.productName}</div>
                                            <div className={"text-sm " + lato.className}>{prod1?.price}</div>
                                            <p className={"text-xs underline underline-offset-4 " + lato.className}>SHOP NOW</p>
                                        </div>
                                    </div>
                                    <div className="relative w-1/3">
                                        {prod2 == null ?
                                            <Center height="20vh"><Spinner size='md' color="#8B4513" /></Center> :
                                            <Image src={prod2?.imageSrc} sizes="(max-width: 200px) 100vw, 50vw" alt="Dynamic Product" fill className="object-cover object-top " />
                                        }
                                    </div>
                                </div>
                            </div>
                        </Link>
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