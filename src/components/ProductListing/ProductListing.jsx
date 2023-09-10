"use client"
import { lato, playfairDisplay } from "@/app/font"
import { useState } from "react"
import { GoArrowRight } from "react-icons/go"
import FourProducts from "../FourProducts/FourProducts"

export default function ProductListing({ heading, row1, row2, id }) {
    const [showMore, setShowMore] = useState(false)
    const handleToggle = () => {
        setShowMore((val) => !val)
    }
    return (
        <section id={id} className="lg:container mx-auto text-gray-600 bg-white mb-4 lg:mb-8 body-font">
            <h1
                className={
                    " text-3xl px-6 lg:px-16 pb-8 lg:pb-16 text-[#3E3E3E] uppercase md:text-5xl font-medium  " +
                    playfairDisplay.className
                }
            >
                {heading}
            </h1>
            <div className=" lg:px-16">
                <FourProducts data={row1} />
                {showMore ? <FourProducts data={row2} /> : ''}
            </div>

            <div>
                <button
                    onClick={handleToggle}
                    type="submit"
                    className={
                        "inline-block md:w-1/4 lg:w-2/12 ml-6 lg:ml-16  mb-5 bg-primetouch px-7 lg:px-4 py-2 md:py-4 text-sm leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-50 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] " +
                        lato.className
                    }
                >
                    <span className="flex items-center justify-between text-sm md:text-xl text-left text-white uppercase ">
                        {showMore ? 'See Less' : 'See More'} &nbsp; <GoArrowRight />
                    </span>
                </button>
            </div>
        </section>
    )
}
