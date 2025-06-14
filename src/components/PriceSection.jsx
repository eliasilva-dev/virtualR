import { CheckCircle} from "lucide-react"
import {  pricingOptions } from "../constants"


export default function PriceSection(){
    return(
        <section className="mx-auto mt-20 flex flex-col items-center">
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl">Price</h1>
            <div className="flex flex-wrap mt-10 w-full">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="border border-neutral-600 rounded-xl p-10">
                            <h1 className="text-4xl py-2 ml-8 mt-5">
                            {option.title}
                            {option.title === "Pro" && (
                                <span className="text-2xl ml-2 bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">(Most Popular)</span>
                            )}
                        </h1>
                        <p className="text-4xl px-3 py-2 ml-5 mt-3 ">{option.price}
                        <span className="text-sm ml-2 text-neutral-600">/Month</span>
                        </p>

                        <ul >
                            {option.features.map((feature, index) => (
                                <li key={index} className="flex mt-8 p-2 ml-5">
                                    <CheckCircle />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="" className="border border-orange-900  rounded-md p-5 mt-20 inline-flex justify-center items-center text-xl w-3/4 h-10 ml-10  hover:bg-orange-900 transition duration-200" >Subscribe</a>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}