import React from 'react'
import {FaDribbbleSquare,
FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaLinkedin} from "react-icons/fa"
function Footer() {
  return (
    <div className='max-w-[1240px] py-16 px-4 grid lg:grid-cols-3 mx-auto text-gray-300'>
        <div>
            <h1 className='text-3xl font-bold text-[#00A36C]'>REACT</h1>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor provident repellendus accusantium distinctio recusandae iure asperiores minima quos ullam.</p>
            <div className='flex gap-2 py-4'>
                <FaDribbbleSquare  size={30} />
                <FaGithubSquare  size={30}/>
                <FaInstagramSquare size={30} />
                <FaTwitterSquare  size={30}/>
                <FaFacebookSquare  size={30}/>
                <FaLinkedin  size={30}/>
            </div>
        </div>
        <div className=' col-span-2 flex justify-between'>
            <div className='ml-12'>
                <h2 className='text-gray-400'>Solutions</h2>
                <ul >
                    <li className='text-sm py-2'>Analytics</li>
                    <li className='text-sm py-2'>Marketing</li>
                    <li className='text-sm py-2'>Commerce</li>
                    <li className='text-sm py-2'>Services</li>
                </ul>
            </div>
            <div >
                <h2 className='text-gray-400'>Pricing</h2>
                <ul >
                    <li className='text-sm py-2'>Analytics</li>
                    <li className='text-sm py-2'>Marketing</li>
                    <li className='text-sm py-2'>Commerce</li>
                    <li className='text-sm py-2'>Services</li>
                </ul>
            </div>
            <div >
                <h2 className='text-gray-400'>Insights</h2>
                <ul >
                    <li className='text-sm py-2'>Analytics</li>
                    <li className='text-sm py-2'>Marketing</li>
                    <li className='text-sm py-2'>Commerce</li>
                    <li className='text-sm py-2'>Services</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer