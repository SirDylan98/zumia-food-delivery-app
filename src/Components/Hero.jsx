import React from 'react'

export default function Hero() {
  return (
    <div className='w-full mx-auto p-4'>
        <div className='w-full  h-[600px] relative'>
            {/* Overlay */}
            <div className='w-full top-0 left-0 p-4 h-full rounded-xl text-gray-200 flex flex-col justify-center bg-black/40 absolute'>
                <h1 className='px-4 text-4xl sm:text-4xl  lg:text-6xl font-bold '> The <span className='text-orange-500 my-4'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-4xl lg:text-6xl  font-bold text-orange-500 my-4'>Meals <span className=' text-gray-200'>Delivered</span></h1>
              
            </div>
            <img src="https://images.pexels.com/photos/2662878/pexels-photo-2662878.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className='object-cover w-full h-[600px] rounded-xl' alt="" />
        </div>
    </div>
  )
}
