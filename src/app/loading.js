import { inter } from "./font";

export default function loading() {
    return (
        <>
            <div className="px-10 mx-auto flex items-center justify-center available--space bg-white ">
                <h1 className={"md:text-xl italic font-light " + inter.className}>Loading...</h1>
            </div>
        </>
    )
}
