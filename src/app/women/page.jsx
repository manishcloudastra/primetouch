import CategoryBanner from '@/components/CategoryBanner/CategoryBanner'
import ProductListing from '@/components/ProductListing/ProductListing'
import React from 'react'
import { fourWomenProducts } from '../(mock-data)/products'

const page = () => {
    return (
        <div>
            <CategoryBanner backgroundClass={'women--landing'} scrollID={'womenProducts'} />
            <div id="womenProducts" className='mt-8 lg:mt-12'>
                <ProductListing heading="the best dress for the best woman" row1={fourWomenProducts} row2={fourWomenProducts} />
            </div>
        </div>
    )
}

export default page