import { features } from "../constants";
export default function Feature(){
    return(
        <section id="feature" className="relative mt-20 mx-auto flex flex-col items-center">
            <h5 className="px-6 py-2 bg-neutral-800/50 rounded-full text-orange-500 uppercase tracking-wide">
                Features
            </h5>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-20 text-center tracking-wide">
                Easily build 
                <span className="bg-gradient-to-r from-orange-700 to-red-800 bg-clip-text text-transparent">{" "}your code</span>
            </h1>

            <div className="mt-20 flex flex-wrap ">
                {features.map((item, index) => (
                    <div key={index} className="w-full md:1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex items-center justify-center flex-wrap mx-6 w-10 h-10 p-2 rounded-full  bg-neutral-900 text-orange-700">
                                {item.icon}         
                            </div>
                            <div >
                                <h5 className="mt-1 mb-6 text-xl">
                                    {item.text}
                                    
                                </h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">
                                    {item.description}
                                    </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}