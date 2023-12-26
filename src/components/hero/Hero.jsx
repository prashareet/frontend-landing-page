import React from 'react'
import Typewriter from 'typewriter-effect'

  
function Hero() {
  
  return (
    <div className='text-white '>
        <div className=' max-w-[800px] mt-[-96px] flex flex-col w-full h-screen mx-auto text-center justify-center'>
            <p className=' text-[#00A36C] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold md:text-6xl pb-2 sm:text-5xl text-4xl '>Grow with Data</h1>
            <div className='font-bold text-xl md:text-2xl flex justify-center'>
                <p className='font-bold text-xl md:text-2xl'>Fast,flexible financing for</p>
                <p className=' px-2 text-gray-500'><Typewriter className= "px-2"
                  options={{
                    strings: ['BTB', 'BTC', 'SASS'],
                    autoStart: true,
                    loop: true,
                  }}
                /></p>
                
            </div>
            <p className=' md:text-2xl font-bold text-xl text-gray-400 pt-3'>Monitor your data, revenue and other analytics with this powerful data engine</p>
            <button className=' bg-[#00A36C] w-[200px] rounded-md px-1 py-1.5 font-semibold text-black mx-auto mt-8 '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero