import { allProducts } from '@/app/(mock-data)/products';
import React from 'react'

const page = ({ params }) => {
    const foundProduct = allProducts.find(product => product.slug === params.slug);
    return (
        <div>
            The product data is {JSON.stringify(foundProduct)}
        </div>
    )
}

export default page