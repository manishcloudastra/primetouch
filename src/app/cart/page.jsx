"use client"
import { Box, Button, Grid, GridItem, HStack, Image, Input, Spinner, Text } from "@chakra-ui/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { BsCartX, BsTrash } from "react-icons/bs"
import { fourMenProducts } from "../(mock-data)/products"
import { lato, playfair, playfairDisplay, poppins } from "../font"

const page = () => {
    const [loading, setLoading] = useState(false)
    const [cartProducts, setCartProducts] = useState(null)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            // setCartProducts([])
            setCartProducts(fourMenProducts)
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {loading || cartProducts == null ? (
                <div className="container flex flex-col items-center justify-center mx-auto available--space ">
                    <Spinner size="lg" color="#8B4513" />
                </div>
            ) : cartProducts?.length == 0 ? (
                <div className="container flex flex-col items-center justify-center mx-auto available--space ">
                    <BsCartX size={48} />
                    <h1
                        className={
                            "text-2xl lg:text-[1.75rem] mt-6 font-medium text-center " +
                            playfair.className
                        }
                    >
                        No products added in your cart
                    </h1>
                    <Link
                        href="/#productsSection"
                        className="w-64 flex flex-col justify-center items-center font-medium  rounded mt-10 bg-primetouch px-7 py-4 text-sm leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    >
                        <button type="submit">
                            <span className="text-white">
                                Continue Shopping
                            </span>
                        </button>
                    </Link>
                </div>
            ) : (
                cartProducts?.length > 0 && (
                    <section className={"lg:container mx-auto available--space text-gray-600 bg-white body-font " + poppins.className}>
                        <h1
                            className={
                                " text-xl px-6 lg:px-16 pt-8 pb-4 md:pt-8 md:pb-6 lg:pt-12 lg:pb-6 text-[#3E3E3E] " +
                                poppins.className
                            }
                        >
                            {`My Cart (${cartProducts?.length})`}
                        </h1>
                        {/* {console.log(cartProducts)} */}
                        <div className="hidden px-6 lg:px-16 lg:block">
                            <Grid
                                alignItems="center"
                                templateColumns={{ base: 'repeat(6, 1fr)', lg: 'repeat(8, 1fr)' }}
                                my="5"
                                className="font-medium rounded-md sides--shadow"
                            >
                                <GridItem className="p-3" colSpan={{ base: 5, lg: 4 }}>
                                    <Text className="pl-8 text-left" >Product</Text>
                                </GridItem>
                                <GridItem className="p-3" colSpan={{ base: 3, lg: 1 }} justifyContent="flex-end">
                                    <HStack my="0.5rem">
                                        <Text className="w-full text-center">Price</Text>
                                    </HStack>
                                </GridItem>
                                <GridItem colSpan={{ base: 3, lg: 1 }} textAlign="center">
                                    <Text className="text-center" >Quantity</Text>
                                </GridItem>
                                <GridItem className="p-3" colSpan={{ base: 2, lg: 1 }}>
                                    <HStack my="0.5rem" >
                                        <Text className="w-full text-center" >Subtotal</Text>
                                    </HStack>
                                </GridItem>
                                <GridItem className="flex justify-center p-3" textAlign="center">
                                    <Text >Action</Text>
                                </GridItem>
                            </Grid>
                        </div>
                        <div className="px-6 pb-6 lg:px-16 lg:pb-16">
                            {cartProducts?.map((item, idx) => (
                                <Grid
                                    key={idx}
                                    alignItems="center"
                                    templateColumns={{ base: 'repeat(6, 1fr)', lg: 'repeat(8, 1fr)' }}
                                    my="5"
                                    className="rounded-md sides--shadow py-2 md:py-3"
                                >
                                    <GridItem className="p-3" colSpan={{ base: 2, lg: 1 }} >
                                        <HStack className="flex items-center justify-center">
                                            <Link href={`/${item.category}/${item.slug}`}>
                                                <Image
                                                    src={item.imageSrc}
                                                    className="h-16 rounded"
                                                />
                                            </Link>
                                        </HStack>
                                    </GridItem>
                                    <GridItem className="p-3" colSpan={{ base: 4, lg: 3 }}>
                                        <Link href={`/${item.category}/${item.slug}`}>
                                            <Text className="font-medium" >{item.productName}</Text>
                                            <Text className="text-sm line-clamp-1" >{item.productDescription}</Text>
                                        </Link>
                                    </GridItem>
                                    <GridItem className="hidden p-3 md:block" colSpan={{ md: 2, lg: 1 }} justifyContent="flex-end">
                                        <HStack my="0.5rem">
                                            <Text className="flex justify-center w-full" >{item.price}</Text>
                                        </HStack>
                                    </GridItem>
                                    <GridItem colSpan={{ base: 3, md: 1, lg: 1 }} justifyContent="flex-end">
                                        <HStack my="0.5rem" justifyContent="flex-end">
                                            <Button className="active:bg-primetouch-light" onClick={() => { }}>-</Button>
                                            <Input
                                                type="number"
                                                value={1}
                                                readOnly={true}
                                                minW="32px"
                                                maxW="55px"
                                                min="1"
                                                max="20"
                                                style={{ textAlign: "center" }}
                                            />
                                            <Button className="active:bg-primetouch-light" onClick={() => { }}>+</Button>
                                        </HStack>
                                    </GridItem>
                                    <GridItem className="p-3 " textAlign="center" colSpan={{ base: 2, lg: 1 }}>
                                        <Text >$ 100.99</Text>
                                    </GridItem>
                                    <GridItem className="flex justify-center " textAlign="right">
                                        <Button
                                            variant="ghost"
                                            colorScheme="red"
                                            onClick={() => { }}
                                        >
                                            <BsTrash />
                                        </Button>
                                    </GridItem>
                                </Grid>
                            ))}
                            <div className="flex flex-col gap-5 py-4 md:my-6 md:flex-row md:items-center md:justify-between">
                                <Link href="/" className="w-full md:w-1/3 lg:w-1/4">
                                    <button className="w-full font-medium rounded bg-primetouch px-7 py-3 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                        <span className='text-white'>Return To Shop</span>
                                    </button>
                                </Link>
                                <button className="w-full md:w-1/3 lg:w-1/4 rounded delay-50 items-center justify-center border border-[#00000066] bg-white px-7 py-3 transition ease-in-out hover:bg-gray-100 hover:shadow-md focus:outline-none focus:ring-1 focus:ring-primetouch focus:ring-opacity-50 ">
                                    <span className="font-medium text-gray-700">Clear Cart</span>
                                </button>
                            </div>
                            <div className="my-6 md:my-10 lg:mt-10 lg:mb-0 md:flex md:justify-between md:space-x-8 lg:space-x-2 ">
                                <div className="md:w-1/2">
                                    <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-4">
                                        <Input placeholder='Coupon Code' className="text-base border-gray-400 w-full lg:w-3/5" size='lg' />
                                        <button className="w-2/3 lg:w-2/5 px-7 py-3 font-medium rounded bg-primetouch leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                            <span className='text-white'>Apply Coupon</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-6 py-8 mt-6 border border-gray-400 rounded shadow-md md:mt-0 md:w-1/2 lg:w-2/5">
                                    <div className="flex justify-between">
                                        <p className="text-gray-700 font-medium">Sub Total</p>
                                        <p className="text-gray-700 font-medium">$123.99</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <p className="text-gray-700">Tax (10%)</p>
                                        <p className="text-gray-700">$4.99</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <p className="text-gray-700">Coupon Discount</p>
                                        <p className="text-gray-700">- $0.00</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <p className="text-gray-700">Shipping Cost</p>
                                        <p className="text-gray-700">- $0.00</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between pb-6">
                                        <p className="text-lg font-bold">Total</p>
                                        <div className="">
                                            <p className="mb-1 text-lg font-bold">$134.98</p>
                                        </div>
                                    </div>
                                    <Link href="/checkout" className="w-full md:w-1/3 lg:w-1/4">
                                        <button className="w-full font-medium rounded bg-primetouch px-7 py-3 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                            <span className='text-white'>Proceed to checkout</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            )}
        </>
    )
}

export default page
