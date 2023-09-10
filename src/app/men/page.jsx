import CategoryBanner from '@/components/CategoryBanner/CategoryBanner'
import React from 'react'
import { fourMenProducts } from '../(mock-data)/products'
import ProductListing from '@/components/ProductListing/ProductListing'

const page = () => {
    return (
        <div>
            <CategoryBanner backgroundClass={'men--landing'} scrollID={'menProducts'} />
            <div id="menProducts" className='mt-8 lg:mt-12'>
                <ProductListing heading="Best outfit for your happiness" row1={fourMenProducts} row2={fourMenProducts} />
            </div>
        </div>
    )
}

export default page