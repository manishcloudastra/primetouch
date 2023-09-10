import { lato, playfairDisplay } from '@/app/font'
import Link from 'next/link'
import React from 'react'

const FourProducts = ({ data }) => {
    return (
        <div className="relative grid grid-cols-2 gap-6 px-6 mb-8 md:grid-cols-4 lg:gap-12 md:mb-10">
            {
                data.map((prod, idx) => (
                    <Link href={`/${prod.category}/${prod.slug}`} key={`women${prod}${idx}`}>
                        <div className="relative block overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-top w-full h-auto transition product--img--hover" src={prod.imageSrc} />
                            <div className="absolute top-3 right-3 hidden md:inline-flex items-center rounded-full bg-primetouch py-[1px] px-[6px] shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className={"ml-1 text-[0.75rem] text-white " + lato.className}>{prod?.rating}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className={"text-gray-500 text-xs tracking-widest title-font mb-1 uppercase " + lato.className}>{prod.category}</h3>
                            <h2 className={"text-gray-900 title-font text-lg pb-8  line-clamp-2 lg:text-xl " + playfairDisplay.className}>{prod.productName}</h2>
                            <p className={"absolute bottom-0 " + lato.className}>{prod.price}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default FourProducts