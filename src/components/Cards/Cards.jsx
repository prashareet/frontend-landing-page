import React from 'react'
import Single from "../../assets/single.png"
import Double from "../../assets/double.png"
import Triple from "../../assets/triple.png"
import Card from './Card'
function Cards() {
    const features = {
        d1 : "1TB storage",
        d2 : "2 Granted users",
        d3 : "Sending upto 4gb"
    }
  return (
    <div className='w-full bg-white py-[10rem] px-4 mx-auto'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 md:gap-16 '>
            <div className=' w-full shadow-xl flex flex-col rounded-lg p-4 hover:scale-105 duration-300'>
                <img src={Single} alt='/' className='w-20 mt-[-3rem] mx-auto bg-white' />
                <h2 className='text-3xl font-bold text-center'>Single User</h2>
                <p className='text-4xl font-bold text-center pt-4'>$149</p>
                <div className='text-center font-medium pt-4'>
                    <p className='text-2xl '>500 gb storage</p>
                    <p className='text-2xl '>1 granted user</p>
                    <p className='text-2xl '>Send upto 2gb</p>
                    <button className='bg-[#00A36C] px-3 py-1.5 rounded-md font-semibold ml-4 my-6 w-[200px] mx-auto'>Start Trial</button>
                </div>
                
            </div>
            <Card 
                dollar={"199"}
                userType={"Partnership"}
                imgSource={Double}
                features={features}
                buttonStyle = {'bg-black text-[#00A36C] w-[200px] px-1 py-2  mt-4 rounded-md font-semibold'}
            />
            <Card 
                dollar={"249"}
                userType={"Group"}
                imgSource={Triple}
                features={features}
                buttonStyle={'bg-[#00A36C] px-3 py-1.5 rounded-md font-semibold ml-4 my-6 w-[200px] mx-auto'}
            />
            

        </div>
    </div>
  )
}

export default Cards