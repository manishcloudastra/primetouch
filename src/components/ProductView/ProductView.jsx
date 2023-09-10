'use client'
import { tenor } from "@/app/font";
import dynamic from "next/dynamic";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
const StarRatings = dynamic(() => import("react-star-ratings"), {
    ssr: false,
});


const ProductView = ({ productData }) => {
    const [images, setImages] = useState({
        img1: productData?.imageSrc,
        img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    return (
        <section className="overflow-hidden text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto md:py-12 lg:py-24">
                <div className="grid gap-6 mx-auto md:grid-cols-2 ">
                    {/* <img alt={productData?.imageAlt} className="object-cover object-center w-full h-64 rounded lg:h-auto " src={productData?.imageSrc} /> */}

                    <div className='flex flex-col gap-4 lg:flex-row-reverse lg:justify-evenly'>
                        <img src={activeImg} alt="" className='w-72 h-80 md:h-96 lg:h-[36rem] md:w-[22rem] lg:w-[28rem] aspect-square object-cover object-top rounded mx-auto productview--img--hover' />
                        <div className='flex flex-row justify-center space-x-2  lg:flex-col md:space-x-3 lg:space-x-0 lg:space-y-4 lg:justify-start'>
                            <div className="rounded-md active:border-primetouch hover:border-2 hover:border-primetouch-light">
                                <img src={images.img1} alt="ref1" className='object-cover object-top w-16 h-20 rounded cursor-pointer md:w-20 md:h-24 lg:w-[5.5rem] lg:h-[6.5rem]' onClick={() => setActiveImage(images.img1)} />
                            </div>
                            <div className="rounded-md active:border-primetouch hover:border-2 hover:border-primetouch-light">
                                <img src={images.img2} alt="ref2" className='object-cover object-top w-16 h-20 rounded cursor-pointer md:w-20 md:h-24 lg:w-[5.5rem] lg:h-[6.5rem]' onClick={() => setActiveImage(images.img2)} />
                            </div>
                            <div className="rounded-md active:border-primetouch hover:border-2 hover:border-primetouch-light">
                                <img src={images.img3} alt="ref3" className='object-cover object-top w-16 h-20 rounded cursor-pointer md:w-20 md:h-24 lg:w-[5.5rem] lg:h-[6.5rem]' onClick={() => setActiveImage(images.img3)} />
                            </div>
                            <div className="rounded-md active:border-primetouch hover:border-2 hover:border-primetouch-light">
                                <img src={images.img4} alt="ref4" className='object-cover object-top w-16 h-20 rounded cursor-pointer md:w-20 md:h-24 lg:w-[5.5rem] lg:h-[6.5rem]' onClick={() => setActiveImage(images.img4)} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-6 lg:mt-0 lg:py-6 ">
                        <h2 className="text-sm tracking-widest text-gray-500 title-font">{productData?.brandName}</h2>
                        <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">{productData?.productName}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <StarRatings
                                    rating={Number(productData?.rating)}
                                    starDimension="1.25rem"
                                    starSpacing="0.1rem"
                                    svgIconPath="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                    svgIconViewBox="0 0 24 24"
                                    starRatedColor="#8B4513"
                                />
                                <span className="ml-3 text-gray-600">{`${productData?.rating} out of 5`}</span>
                            </span>
                        </div>
                        <div className="text-2xl font-medium text-gray-900 title-font">{productData?.price}</div>
                        <div className="flex items-center mt-6 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                                <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                                <button className="w-6 h-6 ml-1 bg-indigo-500 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                            </div>
                            <div className="flex items-center ml-6">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="py-2 pl-3 pr-10 text-base border border-gray-300 rounded appearance-none focus:border-primetouch focus:outline-none focus:ring-1 focus:ring-primetouch-light">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col my-8 space-y-6">
                            <button
                                type="submit"
                                className="inline-block group font-medium hover:font-semibold w-full rounded mt-2 bg-primetouch px-7 py-5 text-sm leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                <span className="flex justify-center space-x-6">
                                    <span className={'text-white group-hover:font-semibold uppercase ' + tenor.className}>Add to Cart</span>
                                    <GoArrowRight color="#ffffff" size={"1.15rem"} />
                                </span>
                            </button>
                            <button
                                type="submit"
                                className="inline-block border-[3px] border-primetouch-light group font-medium hover:font-semibold w-full rounded mt-2 bg-white px-7 py-4 text-sm leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                <span className="flex justify-center space-x-6">
                                    <span className={'text-primetouch group-hover:text-white group-hover:font-semibold uppercase ' + tenor.className}>Add to Wishlist</span>
                                    <span className="font-semibold group-hover:text-white">
                                        <GoArrowRight size={"1.15rem"} />
                                    </span>
                                </span>
                            </button>

                        </div>
                        <p className="leading-relaxed">{productData?.productDescription}</p>
                        <div className="my-4">
                            <h2 className="my-2 text-sm font-medium tracking-widest text-gray-500 title-font">KEY FEATURES :</h2>
                            {productData?.keyFeatures.map((keyFeature, idx) => (
                                <li key={idx} className="py-1 leading-relaxed">{keyFeature}</li>
                            ))}
                        </div>
                        <p className="leading-relaxed">{productData?.productSummary}</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductView