import codeImg from "../assets/code.jpg"
import { checkListItems } from "../constants"
import { CircleCheck } from "lucide-react"

export default function ChecklistSection(){
    return(
        
        <section id="workflow" className="flex flex-col mt-20 mx-auto"> 
            <hr className="text-neutral-700 mb-15" />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center"> 
                Accelarete your
                <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">{" "}coding workflow</span> 
            </h1>
            
            <div className="flex mt-10 justify-center flex-wrap">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt=""/>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-10 lg:w-1/2">
                    {checkListItems.map((checkItem, index) => (
                        <div key={index} className="flex mb-10 ">
                            <div  className="bg-neutral-900 rounded-full h-10 w-10 flex items-center justify-center px-2 text-green-400 ">
                                <CircleCheck />
                            </div>
                            <div className="mx-6">
                                <h4 className="text-xl">
                                    {checkItem.title}
                                </h4>
                                <p className="text-sm text-neutral-700 mt-1">
                                    {checkItem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}