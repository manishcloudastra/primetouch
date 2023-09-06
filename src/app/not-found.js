import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="px-10 mx-auto flex items-center justify-center available--space bg-white ">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <div className="text-primetouch-light text-3xl font-bold md:text-7xl">
                            404 Not Found
                        </div>

                        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                            The page you are looking for does not exist and could not be found.
                        </div>
                        <Link href="/" className="w-3/4 md:w-2/4 flex flex-col justify-center items-center font-medium  rounded mt-10 bg-primetouch px-7 py-4 text-sm leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primetouch-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primetouch focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primetouch active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            <button
                                type="submit"
                                >
                                <span className='text-white'>Back to home</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
