import { testimonials } from "../constants"



export default function Testomonials(){
    return (
       <section className="flex flex-col mt-10 mx-auto items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center">What are sayng</h2>
        <div className="flex flex-wrap justify-center mt-20">
           {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full lg:w-1/3 p-2">
                <div className="border border-neutral-800 rounded-md p-4 bg-neutral-900 ">
                    <p>{testimonial.text}</p>
                    <div className="mt-4 flex items-center justify-start ">
                        <img src={testimonial.image} alt=""  className="rounded-full h-15"/>
                        <h2 className="flex flex-col ml-2">{testimonial.user}
                            <span>{testimonial.company}</span>
                        </h2>
                        
                    </div>
                </div>
            </div>
           ))}
        </div>

       </section>
    )
}