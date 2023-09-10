import CategoryBanner from '@/components/CategoryBanner/CategoryBanner'
import React from 'react'
import { formalMen, fourMenProducts } from '../(mock-data)/products'
import ProductListing from '@/components/ProductListing/ProductListing'
import CategoryProductListing from '@/components/ProductListing/CategoryProductListing'

const page = () => {
    return (
        <div>
            <CategoryBanner backgroundClass={'men--landing'} scrollID={'menProducts'} />
            <div id="menProducts" className='mt-8 lg:mt-12'>
                <ProductListing heading="Best outfit for your happiness" row1={fourMenProducts} row2={fourMenProducts} />
            </div>
            <CategoryProductListing prodData={formalMen} />
        </div>
    )
}

export default page