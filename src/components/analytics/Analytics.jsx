import React from 'react'
import Laptop from "../../assets/laptop.jpg"
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt='/'/>
            
            <div className='flex flex-col justify-center p-3'>
                <p className=' text-[#00A36C] font-bold p-2'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold md:text-6xl pb-2 sm:text-5xl text-4xl '>Manage Data Analytics centrally</h1>
                <p className=' text-xl md:text-2xl pt-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat magnam cum nemo voluptas unde nobis dolorem voluptates, labore id laudantium pariatur quod nisi totam maxime non distinctio enim magni.</p>
                <button className='bg-black text-[#00A36C] w-[200px] px-1 py-2  mt-4 rounded-md font-semibold'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics