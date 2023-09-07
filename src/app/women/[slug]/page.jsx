import { allProducts } from '@/app/(mock-data)/products';
import ProductView from '@/components/ProductView/ProductView';
import React from 'react';

const page = ({ params }) => {
    const foundProduct = allProducts.find(product => product.slug === params.slug);
    return (
        <>
            <ProductView productData={foundProduct} />
        </>
    )
}

export default page