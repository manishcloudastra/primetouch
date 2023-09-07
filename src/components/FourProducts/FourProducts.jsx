import React from 'react'

const FourProducts = ({data}) => {
    return (
        <div className="flex flex-wrap -m-4">
            {
                data.map((prod,idx) => (
                    <div key={`women${prod}${idx}`} className="lg:w-1/4 md:w-1/2 px-4 py-8 w-full">
                        <a className="block relative h-72 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover  w-full h-auto block" src={prod.imageSrc} />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{prod.category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-1 ">{prod.name}</h2>
                            <p className="mt-1">{prod.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FourProducts