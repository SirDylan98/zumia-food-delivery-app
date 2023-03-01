import React from 'react'
import delivery from '../assets/delivery.png'
import Herobg from '../assets/heroBg.png'
import { heroData } from '../utils/data'
export default function HomeContainer() {

  return (
    <section id='home' className=' grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-88px)] '>
    <div className=' flex-1 py-2 flex flex-col  gap-6 items-start md:items-start justify-center'>
      <div className=' flex items-center gap-2 justify-center px-4 py-1 rounded-full bg-orange-100'>
        <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
        <div className=' w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img src={delivery}
          className='w-full h-full -z-10 object-contain'
           alt="delivery" />
        </div>
      </div>
      <p className='text-[2.5rem] lg:text-[4.5rem] tracking-wide font-bold text-gray-800'> The Fastest Delivery in 
      <span className='text-orange-600 text-[3rem] md:text-[5rem] '>Your City</span></p>
      <p className='text-base md:w-[80%] text-gray-600 text-center md:text-left'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis obcaecati quos laboriosam veniam quo magni vero minus perspiciatis impedit illo, tempora voluptatem qui,
         praesentium facere nemo consectetur in delectus?</p>
         <button type=' button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full
         md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all 
         ease-in-out duration-100' >Order Now</button>
    </div>
    <div className='py-2  w-full flex-1 flex items-center relative '>
            <img src={Herobg} className='h-[420px]  lg:h-[650px] w-full lg:w-auto ml-auto' alt=" hero bg" />
            <div className='px-1 xl:px-44 gap-4 flex-wrap  py-4 w-full h-full absolute top-0 left-0 flex items-center justify-evenly'>
               {heroData&&heroData.map(n=>(
                 <div key={n.id} className='w-[190px]  min-w-[190px]  p-4 bg-cardOverlay
                 rounded-md  flex flex-col items-center justify-center backdrop-blur-md '>
                   <img src={n.imgSrc} className='w-20 -mt:10 md:w-40 md:-mt-20 ' alt="" />
                   <p className='text-base font-semibold text-slate-600' >{n.name}</p>
                 <p className='text-base font-semibold text-slate-400 my-3' > {n.desc}</p>
                 <p className=' font font-semibold text-md '> <span className='text-md text-red-600'>$</span>{n.price}</p>
                 </div>
               ))}
            </div>
        {/* <div className=' w-full flex items-center justify-center relative'>
        </div> */}
    </div>
  </section>
  )
}
