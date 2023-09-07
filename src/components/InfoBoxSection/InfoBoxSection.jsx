import React from 'react'

const InfoBoxSection = () => {
    return (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 h-48 gap-2 ">
            <div className="border-8 border-gray-400 lg:row-span-2">01</div>
            <div className="border-8 border-gray-400 lg:col-span-2">02</div>
            <div className="border-8 border-gray-400 lg:row-span-2">03</div>
            <div className="border-8 border-gray-400 lg:col-span-2">04</div>
        </div>
    )
}

export default InfoBoxSection