import React from 'react'

export default function MealsCard() {
  return (
    // grid
    <div className='grid md:grid-cols-3 gap-4 p-4 mx-auto rounded-xl'>
        {/* card */}
        <div className='relative rounded-xl'>
            <div className='relative'>
                {/* overlay */}
                <div className='absolute text-2xl  w-full h-full flex rounded-xl  bg-black/60 flex-col justify-center my-auto top-0 left-0 text-gray-200 items-center'>
                <h1>Breakfast</h1>
                <p>08:00 - 10:00</p>
                <button className='bg-gray-300 mt-16 px-12 md:px-16 text-black text-xl hover:scale-105 duration-300 my-4 rounded-full'> Order Now</button>
                </div>
               
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-xl h-[300px]  w-full object-cover' alt="/" />

            </div>
            

        </div>
        {/* second Card */}
        <div className='relative rounded-xl'>
            <div className='relative'>
                {/* overlay */}
                <div className='absolute text-2xl  w-full h-full flex rounded-xl  bg-black/60 flex-col justify-center my-auto top-0 left-0 text-gray-200 items-center'>
                <h1>Lunch</h1>
                <p>12:00 - 14:00</p>
                <button className='bg-gray-300 mt-16 px-12 md:px-16 text-black text-xl my-4 hover:scale-105 duration-300 rounded-full'> Order Now</button>
                </div>
               
                <img src="https://images.pexels.com/photos/6419748/pexels-photo-6419748.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-xl h-[300px] w-full object-cover' alt="/" />

            </div>
            

        </div>
        {/* third Card */}
        <div className='relative rounded-xl'>
            <div className='relative'>
                {/* overlay */}
                <div className='absolute text-2xl  w-full h-full flex rounded-xl  bg-black/60 flex-col justify-center my-auto top-0 left-0 text-gray-200 items-center'>
                <h1>Supper</h1>
                <p>18:00 - 20:00</p>
                <button className='bg-gray-300 mt-16 px-12 md:px-16 text-black text-xl my-4 hover:scale-105 duration-300 rounded-full'> Order Now</button>
                </div>
               
                <img src="https://images.pexels.com/photos/4393018/pexels-photo-4393018.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-xl h-[300px] w-full object-cover' alt="/" />

            </div>
            

        </div>
        

        
    </div>
  )
}
