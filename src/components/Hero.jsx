
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

export default function Hero(){
    return (
        <section className=" relative flex flex-col items-center ">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR improments 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent"> {" "}for developers</span>
            </h1>
            <p className="mt-20 text-neutral-400 text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, eos pariatur eveniet voluptatem dolor vero corporis nisi repellendus, expedita autem ad ab est cupiditate saepe voluptatibus temporibus architecto corrupti repudiandae.</p>
            <div className="button-container flex space-x-8 mt-20 justify-center">
                <a className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-3 rounded-md" href="#">Start for free</a>
                <a className="border rounded-md px-4 py-3" href="#">Start for free</a>
            </div>
            <div className="flex space-x-10 justify-center mt-20">
                <video autoPlay muted  loop className="w-1/2 rounded-lg border border-orange-500">
                    <source src={video1} type="video/mp4" />
                </video>
                <video autoPlay muted  loop className="w-1/2 rounded-lg border border-orange-500">
                    <source src={video2} type="video/mp4" />
                </video>
            </div>

           
        </section>
    );
}