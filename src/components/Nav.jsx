import { useState } from "react"
import { navItems } from "../constants"
import { Menu, X} from "lucide-react"

export default function Nav(){
    const [mobileMenuIsopen, setMobileMenuIsOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuIsOpen(!mobileMenuIsopen)
    }
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 py-4">
            <div className="flex justify-between items-center px-4 mx-auto">
                <div className="flex space-x-4 items-center">
                    <img className="rounded-full h-10 w-10" src="https://placehold.co/100" alt="" />
                    <span className="text-xl tracking-tight">VirutalR</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex space-x-10 items-center">
                    <a href="#" className="border py-2 px-3 rounded-md">Sing In</a>
                    <a href="#" className="py-2 px-8 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">Create Acount</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMobileMenu}>
                        {mobileMenuIsopen ? <X/> : <Menu />}
                    </button>
                </div>
            </div>

            <div>
                {mobileMenuIsopen && (
                    <div className="fixed right-0 z-20 w-full flex flex-col p-12 justify-center items-center bg-neutral-900 lg:hidden">
                        <ul>
                            
                            {navItems.map((item, index) => (
                                <li className="p-2 mb-2" key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                                
                            )) }
                            
                        </ul>
                        <div className="flex space-x-10 mt-6">
                            <a href="#" className="border py-2 px-3 rounded-md">Sing In</a>
                            <a href="#" className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md mr-auto">Create Acount</a>
                        </div>
                    </div>
                )}
            </div>

        </nav>

    )
}