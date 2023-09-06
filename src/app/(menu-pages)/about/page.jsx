'use client'
import { inter, poppins } from '@/app/font'
import React from 'react'
import { BiCheckShield } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import { CiBag1 } from 'react-icons/ci'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { RiShoppingBagLine } from 'react-icons/ri'
import { SlEarphonesAlt } from 'react-icons/sl'
import { TbTruckDelivery } from 'react-icons/tb'

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/pagination"

import 'swiper/css/autoplay'

import { testimonials } from '@/app/(mock-data)/testimonials'
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard'
import { Pagination, Autoplay } from "swiper/modules"

const page = () => {
    return (
        <>
            <section className="text-black body-font">
                <div className="container flex flex-col items-center px-5 mx-auto py-14 md:py-24 md:flex-row">
                    <div className="flex flex-col mb-4 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 md:items-start md:text-left md:mb-0">
                        <h1 className={"mb-8 md:text-4xl font-semibold title-font text-2xl " + inter.className}>Our Story
                        </h1>
                        <p className={"mb-8 leading-relaxed " + poppins.className}>Launced in 2022, Exclusive is  premier online shopping makterplace with an active presense in United kingdom. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className={"mb-8 leading-relaxed " + poppins.className}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                        <img className="object-cover object-center rounded" alt="hero" src="/images/aboutHeroSection.png" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5 pb-12 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center ">
                        <div className="w-full p-4 md:w-1/4 sm:w-1/2 ">
                            <div className="px-4 py-6 border-2 rounded-md group hover:bg-primetouch-50">
                                <div className="flex flex-col items-center justify-center w-full mb-4 ">
                                    <div className="flex flex-col items-center justify-center w-16 h-16 text-white bg-black border-8 border-[#c1c1c1] rounded-full group-hover:text-black group-hover:bg-white">
                                        <BsShop size={'1.25rem'} />
                                    </div>
                                </div>
                                <h2 className="text-3xl pb-2 font-medium text-gray-900 group-hover:text-white title-font">10.5K</h2>
                                <p className="text-sm leading-relaxed group-hover:text-white">Sellers active in our site</p>
                            </div>
                        </div>
                        <div className="w-full p-4 md:w-1/4 sm:w-1/2 ">
                            <div className="px-4 py-6 border-2 rounded-md group hover:bg-primetouch-50">
                                <div className="flex flex-col items-center justify-center w-full mb-4 ">
                                    <div className="flex flex-col items-center justify-center w-16 h-16 text-white bg-black border-8 border-[#c1c1c1] rounded-full group-hover:text-black group-hover:bg-white">
                                        <PiCurrencyCircleDollar size={'1.75rem'} />
                                    </div>
                                </div>
                                <h2 className="text-3xl pb-2 font-medium text-gray-900 group-hover:text-white title-font">33K</h2>
                                <p className="text-sm leading-relaxed group-hover:text-white">Monthly Product Sale</p>
                            </div>
                        </div>
                        <div className="w-full p-4 md:w-1/4 sm:w-1/2 ">
                            <div className="px-4 py-6 border-2 rounded-md group hover:bg-primetouch-50">
                                <div className="flex flex-col items-center justify-center w-full mb-4 ">
                                    <div className="flex flex-col items-center justify-center w-16 h-16 text-white bg-black border-8 border-[#c1c1c1] rounded-full group-hover:text-black group-hover:bg-white">
                                        <RiShoppingBagLine size={'1.25rem'} />
                                    </div>
                                </div>
                                <h2 className="text-3xl pb-2 font-medium text-gray-900 group-hover:text-white title-font">45.5K</h2>
                                <p className="text-sm leading-relaxed group-hover:text-white">Customers active in our site</p>
                            </div>
                        </div>
                        <div className="w-full p-4 md:w-1/4 sm:w-1/2 ">
                            <div className="px-4 py-6 border-2 rounded-md group hover:bg-primetouch-50">
                                <div className="flex flex-col items-center justify-center w-full mb-4 ">
                                    <div className="flex flex-col items-center justify-center w-16 h-16 text-white bg-black border-8 border-[#c1c1c1] rounded-full group-hover:text-black group-hover:bg-white">
                                        <CiBag1 size={'1.25rem'} />
                                    </div>
                                </div>
                                <h2 className="text-3xl pb-2 font-medium text-gray-900 group-hover:text-white title-font">25K</h2>
                                <p className="text-sm leading-relaxed group-hover:text-white">Annual gross sale in out site</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="container p-8 mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    // autoplay={{ delay: 1000 }}
                    autoplay={true}
                    className="mySwiper"
                >
                    {
                        testimonials.map((item, idx) => (
                            <SwiperSlide key={`item${idx}`} >
                                <TestimonialCard name={item.name} occupation={item.occupation} imagePath={`/images/testimonial${((idx) % 3) + 1}.png`} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

            <section>
                <div className="container px-5 pb-12 mx-auto my-12">
                    <div className="flex flex-wrap -m-4 text-center ">
                        <div className="w-full p-4 md:w-1/3 md:mx-auto sm:w-1/2 ">
                            <div className="px-4 py-6 border-2 rounded-md group hover:bg-primetouch-50">
                                <div className="flex flex-col items-center justify-center w-full mb-4 ">
                                    <div className="flex flex-col items-center justify-center w-16 h-16 text-white bg-black border-8 border-[#c1c1c1] rounded-full group-hover:text-black group-hover:bg-white">
                                        <TbTruckDelivery size={'1.5rem'} />
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold pb-2 text-gray-900 uppercase group-hover:text-white title-font">FREE AND FAST DELIVERY</h2>
                                <p className="text-sm leading-relaxed group-hover:text-white">Free delivery for all orders over $140</p>
                            </div>
                        </div>
                        <div className="w-full p-4 md:w-1/3 md:mx-auto sm:w-1/2 ">
                            <div className="px-4 py-6 border-2 rounded-md group hover:bg-primetouch-50">
                                <div className="flex flex-col items-center justify-center w-full mb-4 ">
                                    <div className="flex flex-col items-center justify-center w-16 h-16 text-white bg-black border-8 border-[#c1c1c1] rounded-full group-hover:text-black group-hover:bg-white">
                                        <SlEarphonesAlt size={'1.25rem'} />
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold pb-2 text-gray-900 uppercase group-hover:text-white title-font">24/7 CUSTOMER SERVICE</h2>
                                <p className="text-sm leading-relaxed group-hover:text-white">Friendly 24/7 customer support</p>
                            </div>
                        </div>
                        <div className="w-full p-4 md:w-1/3 md:mx-auto sm:w-1/2 ">
                            <div className="px-4 py-6 border-2 rounded-md group hover:bg-primetouch-50">
                                <div className="flex flex-col items-center justify-center w-full mb-4 ">
                                    <div className="flex flex-col items-center justify-center w-16 h-16 text-white bg-black border-8 border-[#c1c1c1] rounded-full group-hover:text-black group-hover:bg-white">
                                        <BiCheckShield size={'1.5rem'} />
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold pb-2 text-gray-900 uppercase group-hover:text-white title-font">MONEY BACK GUARANTEE</h2>
                                <p className="text-sm leading-relaxed group-hover:text-white">We reurn money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page