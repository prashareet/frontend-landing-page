import React from 'react'
import Card from '../Cards/Card'
function Newsletter() {
  return (
    <div className='w-full py-16 px-8'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='text-white lg:col-span-2'>
                <h1 className='font-semibold md:text-4xl pb-2 sm:text-3xl text-2xl'>Want tips and Tricks to optimise your flow?</h1>
                <p className='text-xl mt-2'>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='mx-auto my-auto'>
                <div className=''>
                    <input type='text' placeholder='Enter your email' className='p-2 rounded-md'/>
                    <button className='bg-[#00A36C] px-3 py-1.5 rounded-md font-semibold ml-4 my-6'>Notify me</button>
                </div>
                <p className='text-white'>We care about the protection of your data. Read ours <span className='text-[#00A36C] border-b border-[#00A36C] cursor-pointer' >Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter