import { lato, playfairDisplay } from '@/app/font'
import Link from 'next/link'
import React from 'react'

const FourProducts = ({ data }) => {
    console.log('FOUR ',data)
    return (
        <div className="relative grid grid-cols-2 gap-6 px-6 mb-8 md:grid-cols-4 lg:gap-12 md:mb-10">
            {
                data.map((prod, idx) => (
                        <Link href={`/${prod.category}/${prod.slug}`} key={`women${prod}${idx}`}>
                            <div className="relative block overflow-hidden rounded">
                                <img alt="ecommerce" className="block object-cover object-top w-full h-auto transition product--img--hover" src={prod.imageSrc} />
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