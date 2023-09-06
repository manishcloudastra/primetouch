import { inter, poppins } from '@/app/font'
import React from 'react'

const page = () => {
    return (
        <section className="container mx-auto bg-white lg:px-12">
            <div className="px-6 py-16">
                <div>
                    <h1 className={"mt-2 text-2xl font-semibold text-gray-800 md:text-3xl " + inter.className}>Get in Touch</h1>
                    <p className={"mt-3 text-gray-500 text-sm " + poppins.className }>We’d love to hear from you. Send us a quick message and we'll get back to you shortly.</p>
                </div>

                <div className={"mt-10 grid grid-cols-1 gap-4 lg:gap-12 md:grid-cols-3 " + poppins.className}>
                    <div className="grid grid-cols-1 p-6 lg:p-12 shadow-md">
                        <div className="pb-3">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <span className="inline-block p-3 text-white rounded-full bg-primetouch">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-base font-medium text-gray-800">Email</h2>
                                </div>
                            </div>
                            <p className="mt-2 text-sm ">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="mt-2 text-sm ">Email: customer@exclusive.com</p>
                            <p className="mt-2 text-sm ">Email: support@exclusive.com</p>
                        </div>

                        <hr className="m-2 lg:m-4" />

                            <div className="pt-3">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <span className="inline-block p-3 text-white rounded-full bg-primetouch">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-medium text-gray-800">Phone</h2>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm">We are available 24/7, 7 days a week.</p>
                                <p className="mt-2 text-sm">Phone: +8801611112222</p>
                            </div>
                    </div>

                    <div className="grid p-6 lg:p-12 shadow-md md:col-span-2">
                        <form>
                            <div className="-mx-2 lg:flex md:items-center ">
                                <div className="flex-1 px-2  lg:mt-0">
                                    <input type="text" placeholder="Your Name" className="block w-full rounded border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-primetouch focus:outline-none focus:ring-1 focus:ring-primetouch-light focus:ring-opacity-40" />
                                </div>

                                <div className="flex-1 px-2 mt-4 lg:mt-0">
                                    <input type="text" placeholder="Your Email" className="block w-full rounded border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-primetouch focus:outline-none focus:ring-1 focus:ring-primetouch-light focus:ring-opacity-40" />
                                </div>

                                <div className="flex-1 px-2 mt-4 lg:mt-0">
                                    <input type="text" placeholder="Your Phone" className="block w-full rounded border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-primetouch focus:outline-none focus:ring-1 focus:ring-primetouch-light focus:ring-opacity-40" />
                                </div>
                            </div>

                            <div className="w-full mt-4 lg:mt-8">
                                <textarea className="mt-2 block h-32 lg:h-52 w-full rounded border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-primetouch focus:outline-none focus:ring-1 focus:ring-primetouch-light focus:ring-opacity-40 md:h-40" placeholder="Message"></textarea>
                            </div>

                            <div className="flex justify-center lg:justify-end w-full lg:mt-4">
                                <button className="md:w-2/4 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primetouch rounded hover:bg-primetouch-light focus:outline-none focus:ring-1 focus:ring-primetouch-light focus:ring-opacity-50">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default page