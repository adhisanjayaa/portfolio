import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <header className="bg-transparent fixed top-0 z-20 w-full px-4 xl:px-16 flex justify-between items-center h-14">
        <h1 className="text-2xl text-primary font-bold">Adhi®</h1>
        <div className="bg-secondary px-5 py-2 rounded-md">    
            <div onClick={handleNav} className={`transition-transform duration-300 ease-in-out ${nav ? 'rotate-180' : 'rotate-0'}`}>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
        <h1 className="m-6 text-2xl font-bold text-secondary bg-transparent">Adhi®</h1>
            <ul className="uppercase p-4 bg-transparent">
                <li className="p-4 text-secondary">Home</li>
                <li className="p-4 text-secondary">Company</li>
                <li className="p-4 text-secondary">About</li>
                <li className="p-4 text-secondary">Contact</li>
            </ul>
        </div>
    </header>
  );
}

export default Navbar;