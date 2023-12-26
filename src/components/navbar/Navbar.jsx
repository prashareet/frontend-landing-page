import React from 'react'
import { useState} from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
    const [nav, setNav] = useState(true);
    function handleNav(){
        setNav(!nav)
    }
  return (
    <div className=' text-white flex justify-between items-center h-12 p-4 mx-auto' >
        <h1 className='text-3xl font-bold text-[#00A36C]'>REACT</h1>
        <ul className=' hidden md:flex cursor-pointer'>
            <li className=' p-4 text-xl hover:border-b border-white cursor-pointer'>Home</li>
            <li className=' p-4 text-xl hover:border-b border-white cursor-pointer'>Services</li>
            <li className=' p-4 text-xl hover:border-b border-white cursor-pointer'>Analytics</li>

            
            
        </ul>
        <div onClick={handleNav} className=' md:hidden '>
            {!nav ? <AiOutlineClose size = {20} className=' cursor-pointer'/> : <AiOutlineMenu size={20} className=' cursor-pointer'/> }
            
        </div>
        <div className = {!nav ? "fixed left-0 top-0 uppercase w-[60%] border-r border-gray-800 h-full bg-[#000300] p-4 ease-in-out duration-500" : "fixed left-[-100%] ease-out duration-250"}>
        <h1 className='text-3xl font-bold text-[#00A36C]'>REACT</h1>
        <ul className=' pt-4'>
            <li className=' p-4 text-xl cursor-pointer border-b  border-gray-700'>About me</li>
            <li className=' p-4 text-xl  cursor-pointer  border-b  border-gray-700'>Home</li>
            <li className=' p-4 text-xl cursor-pointer border-b  border-gray-700'>Contact me</li>
            <li className=' p-4 text-xl cursor-pointer  border-b  border-gray-700'><button className='bg-white text-black rounded-sm p-[3px]'>Github</button></li>
            
        </ul>
        </div>
    </div>

  )
}

export default Navbar