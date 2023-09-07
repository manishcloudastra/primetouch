import { playfair } from '@/app/font'
import Link from 'next/link'
import React from 'react'

const CategorySection = () => {
    return (
        <div id="categorySection" className="px-5 py-2 md:py-8 mx-auto lg:px-32 lg:py-16 2xl:py-32">
            <div className="flex flex-wrap justify-center my-2 -m-1 md:-m-2 md:my-4 lg:my-0">
                <div className="flex flex-wrap justify-center w-1/2 2xl:w-1/3">
                    <Link href='/women'>
                        <div className="relative w-full p-1 md:p-2 lg:pr-8 lg:pb-8 lg:my-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded" src="/images/formalWomen.png" />
                            <h1 className={'absolute font-medium w-[90%] grid top-[40%] uppercase text-white text-center lg:text-left lg:ml-16 md:text-4xl ' + playfair.className} >Formal Women</h1>
                        </div>
                    </Link>
                    <Link href='/men'>
                        <div className="relative w-full p-1 md:px-2 md:pt-2 lg:pr-8 lg:pb-6 lg:mt-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded" src="/images/formalMen.png" />
                            <h1 className={'absolute font-medium w-[90%] grid top-[40%] uppercase text-white text-center lg:text-left lg:ml-16 md:text-4xl ' + playfair.className} >Formal Men</h1>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center w-1/2 2xl:w-1/3">
                    <Link href='/casual'>
                        <div className="relative w-full p-1 md:pl-3 md:pr-2 md:py-3 md:ml-2 lg:ml-4 lg:my-0.5">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded" src="/images/casualStyle.png" />
                            <h1 className={'absolute font-medium w-[90%] grid top-[45%] uppercase text-white text-center lg:text-left lg:ml-16 md:text-4xl ' + playfair.className} >Casual Style</h1>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CategorySection