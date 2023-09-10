"use client"
import { Spinner } from "@chakra-ui/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { TbHeartOff } from "react-icons/tb"
import { allProducts } from "../(mock-data)/products"
import { lato, playfair, playfairDisplay, poppins } from "../font"

const page = () => {
    const [loading, setLoading] = useState(false)
    const [wishListProducts, setWishListProducts] = useState(null)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setWishListProducts([])
            // setWishListProducts(allProducts)
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {loading || wishListProducts == null ? (
                <div className="container mx-auto available--space flex flex-col justify-center items-center ">
                    <Spinner size="lg" color="#8B4513" />
                </div>
            ) : wishListProducts?.length == 0 ? (
                <div className="container mx-auto available--space flex flex-col justify-center items-center ">
                    <TbHeartOff size={48} />
                    <h1
                        className={
                            "text-2xl lg:text-[1.75rem] mt-6 font-medium text-center " +
                            playfair.className
                        }
                    >
                        No products found in your wishlist
                    </h1>
                    <Link
                        href="/#productsSection"
                        className="w-64 flex flex-col justify-center items-center font-medium  rounded mt-10 bg-primetouch px-7 py-4 text-sm leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    >
                        <button type="submit">
                            <span className="text-white">
                                Go back to products
                            </span>
                        </button>
                    </Link>
                </div>
            ) : (
                wishListProducts?.length > 0 && (
                    <section className="lg:container mx-auto text-gray-600 bg-white mb-4 lg:mb-8 body-font">
                        <h1
                            className={
                                " text-xl px-6 lg:px-16 py-8 lg:py-12 text-[#3E3E3E]  " +
                                poppins.className
                            }
                        >
                            {`Wishlist (${wishListProducts?.length})`}
                        </h1>
                        <div className=" grid grid-cols-2 gap-6 px-6 lg:px-16 mb-8 md:grid-cols-4 lg:gap-12 md:mb-10">
                            {wishListProducts?.map((prod, idx) => (
                                <Link
                                    href={`/${prod.category}/${prod.slug}`}
                                    key={`women${prod}${idx}`}
                                    className="relative"
                                >
                                    <div className="relative block overflow-hidden rounded">
                                        <img
                                            alt="ecommerce"
                                            className="block object-cover object-top w-full h-auto transition product--img--hover"
                                            src={prod.imageSrc}
                                        />
                                        <div className="absolute top-3 right-3 hidden md:inline-flex items-center rounded-full bg-primetouch py-[1px] px-[6px] shadow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-yellow-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span
                                                className={
                                                    "ml-1 text-[0.75rem] text-white " +
                                                    lato.className
                                                }
                                            >
                                                {prod?.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3
                                            className={
                                                "text-gray-500 text-xs tracking-widest title-font mb-1 uppercase " +
                                                lato.className
                                            }
                                        >
                                            {prod.category}
                                        </h3>
                                        <h2
                                            className={
                                                "text-gray-900 title-font text-lg pb-8  line-clamp-2 lg:text-xl " +
                                                playfairDisplay.className
                                            }
                                        >
                                            {prod.productName}
                                        </h2>
                                        <p
                                            className={
                                                "absolute bottom-0 " +
                                                lato.className
                                            }
                                        >
                                            {prod.price}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )
            )}
        </>
    )
}

export default page
