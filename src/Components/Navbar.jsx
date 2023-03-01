import React from "react";
import { FiHelpCircle, FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart,FaWallet,FaShareAltSquare } from "react-icons/fa";
import {AiOutlineCloseCircle,AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdOutlineHelp } from 'react-icons/md'
import {GiMeal , GiHotMeal} from 'react-icons/gi'
import { useState } from "react";
import {motion} from 'framer-motion'
var size=30;

export default function Navbar({setShowCart}) {
    const [nav, setNav]= useState(false);
    const handleNavClick=()=>{
        setNav(!nav);
        console.log("clicked")
    }
  return (
    <div className="w-full drop-shadow-xl shadow-lg ">
      <div className=" w-full flex justify-between p-4 py-4">
        <div className="flex justify-center items-center">
          <FiMenu onClick={handleNavClick} size={30} className="mr-4" />
          <p className="text-2xl md:text-3xl">
            {" "}
            Zumia <span className="font-bold text-orange-500">Meal</span>
          </p>
          <div className="hidden md:flex bg-gray-200 rounded-full ml-2 items-center">
            <p className="mr-2 text-white bg-black p-2 px-4 rounded-full">
              Delivery
            </p>
            <p className=" pr-4">PickUp</p>
          </div>
        </div>
        {/* Search  */}
        <div className=" hidden md:flex items-center rounded-full bg-gray-200 px-2 w-[200px] sm:w-[300px] lg:w-[500px]">
          <AiOutlineSearch  size={30} />
          <input type="text" placeholder="Search Meal " className=" bg-transparent focus:outline-none" />
        </div>
        <div>
          <motion.button 
          whileTap={{scale:0.75}}
          onClick={()=>setShowCart(prev=>!prev)} className=" flex justify-center items-center text-white bg-black  py-2 rounded-full">
            <FaShoppingCart  size={20} className="text-white mr-3" /> Cart
          </motion.button>
        </div>
      </div>
      {/* mobile Menu */}
      {/* Overlay */}
    {nav?<div className="bg-black/80 fixed w-full duration-500 h-screen left-0 top-0 z-100">

</div>:''}
      
      {/* side drawer */}
      <div className={nav?'top-0 left-0 h-screen w-[50%] md:w-[25%] rounded-2xl my-0 z-10 bg-white fixed duration-300':'top-0 left-[-100%] h-screen w-[50%] md:w-[25%] rounded-2xl my-0 z-10 bg-white fixed duration-300'}>
    <AiOutlineCloseCircle onClick={handleNavClick} size={40} className="top-3 right-4 absolute"/>
    <p className="text-xl md:text-2xl p-4">
            {" "}
            Zumia <span className="font-bold">Meal</span>
          </p>
          <div className="flex flex-col w-full items-start">
            <ul className=" w-full">
                <li className="flex items-center lg:text-lg text-md my-6 mx-4 "><TbTruckDelivery size={size} className="text-black mr-4"/> Orders</li>
                <li className="flex items-center lg:text-lg text-md my-6 mx-4 "><MdFavorite size={size} className="text-black mr-4"/> Favorites</li>
                <li className="flex items-center lg:text-lg text-md my-6 mx-4 "><AiFillTag size={size} className="text-black mr-4"/> Promotions</li>
                <li className="flex items-center lg:text-lg text-md my-6 mx-4 "><FiHelpCircle size={size} className="text-black mr-4"/> Help</li>
                <li className="flex items-center lg:text-lg text-md my-6 mx-4 "><GiMeal size={size} className="text-black mr-4"/> Best Meals</li>
                <li className="flex items-center lg:text-lg text-md my-6 mx-4 "><FaShareAltSquare size={size} className="text-black mr-4"/> Share</li>
                
            </ul>

          </div>
      </div>
    </div>
  );
}
