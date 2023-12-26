import React from 'react'

function Card({dollar, userType, imgSource, features, buttonStyle,scale }) {
  return (
    <div className=' w-full shadow-xl flex flex-col rounded-lg p-4 hover:scale-105 duration-300 '>
                <img src={imgSource} alt='/' className='w-20 mt-[-3rem] mx-auto' />
                <h2 className='text-3xl font-bold text-center'>{userType} User</h2>
                <p className='text-4xl font-bold text-center pt-4'>${dollar}</p>
                <div className='text-center font-medium pt-4'>
                    <p className='text-2xl '>2 Tb storage</p>
                    <p className='text-2xl '>4 granted users</p>
                    <p className='text-2xl '>Send upto 4gb</p>
                    <button className={buttonStyle}>Start Trial</button>
                </div>
                
    </div>
  )
}

export default Card