'use client'
import BillingInput from '@/components/BillingFormInput/BillingInput'
import { Box, Checkbox, FormControl, FormLabel, Grid, GridItem, HStack, Heading, Image, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { fourMenProducts } from '../(mock-data)/products'
import { inter, poppins } from '../font'

const page = () => {
    return (
        <div className="lg:container mx-auto available--space ">

            <div className={"my-6 px-6 md:my-10 lg:my-10 md:flex md:justify-evenly md:space-x-4 lg:space-x-2 " + poppins.className}>
                <div className="md:w-2/5 flex flex-col space-y-6 lg:space-y-10">
                    <div>
                        <h1 className={inter.className + ' text-2xl md:text-3xl pt-6 md:pt-10 font-medium lg:pt-16 tracking-wide '}>
                            Billing Details
                        </h1>
                    </div>
                    <div>
                        <BillingInput title='Full Name' placeholder='Full Name' isRequired={true} />
                        <BillingInput title='Email' placeholder='Email' isRequired={true} />
                        <BillingInput title='Phone Number' placeholder='Phone number' isRequired={true} />
                        <BillingInput title='Alternate Phone Number' placeholder='Alternate Phone number (optional)' isRequired={false} />
                        <BillingInput title='Company Name' placeholder='Company Name' isRequired={false} />
                        <BillingInput title='Street Address' placeholder='Street Address' isRequired={true} />
                        <BillingInput title='Alternate Street Address' placeholder='Apartment, floor, etc. (optional)' isRequired={false} />
                        <Checkbox size='md' colorScheme='orange' ><Text className='text-sm my-2'> Save this information for faster check-out next time</Text></Checkbox>
                    </div>
                </div>

                <div className=" mt-6  md:mt-0 md:w-1/2 lg:w-2/5 flex flex-col md:justify-center ">
                    {/* <div className="my-4">
                        {
                            fourMenProducts.map((prod) => (
                                <Grid key={prod.id} className='py-2' templateColumns={'5rem 1fr 5rem '}>
                                    <GridItem >
                                        <HStack className="flex w-full h-full items-center justify-center">
                                            <Image
                                                src={prod.imageSrc}
                                                className="w-10 h-10 object-cover object-top rounded"
                                            />
                                        </HStack>
                                    </GridItem>
                                    <GridItem >
                                        <HStack className="flex w-full h-full justify-start">
                                            <Text className='pl-3 line-clamp-1'>{prod.productName}</Text>
                                        </HStack>
                                    </GridItem>
                                    <GridItem >
                                        <HStack className="flex w-full h-full items-center justify-center">
                                            <Text>$123.99</Text>
                                        </HStack>
                                    </GridItem>
                                </Grid>
                            ))
                        }
                    </div> */}
                    <Box className='mb-2'>
                        <Heading size="md" my="1rem">
                            Payment Option
                        </Heading>
                        <RadioGroup>
                            <Stack>
                                <Radio value="cashOnDelivery">Cash On Delivery</Radio>
                                <Radio value="3">Credit Card (Master/Visa)</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-4 my-8">
                        <Input placeholder='Coupon Code' className="text-base border-gray-400 w-full lg:w-1/2 xl:3/5" size='lg' />
                        <button className="w-2/3 lg:w-1/2 xl:w-2/5 px-7 py-3 font-medium rounded bg-primetouch leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            <span className='text-white'>Apply Coupon</span>
                        </button>
                    </div>
                    <Box className='mb-2'>
                        <Heading size="md" my="1rem">
                            Order Summary
                        </Heading>
                    </Box>
                    <div className="flex justify-between">
                        <p className=" text-gray-700">Sub Total</p>
                        <p className=" text-gray-700">$123.99</p>
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
                    <button className="w-full lg:w-1/2 px-7 py-3 font-medium rounded bg-primetouch leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                        <span className='text-white'>Place Order</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page