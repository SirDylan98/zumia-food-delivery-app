import React from "react";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BiMinus, BiPlus } from "react-icons/bi";
export default function CartContainer({showCart,setShowCart}) {
  return (
    <motion.div
    initial={{opacity:0,x:200}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:200}}
      className="w-full md:w-[375px] h-screen bg-white drop-shadow flex
     flex-col fixed top-0 right-0 z-[101] "
    >
      <div className=" w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace onClick={()=>{setShowCart(!showCart)}} className="text-slate-600 text-3xl" />
        </motion.div>
        <p className="text-slate-500 text-2xl font-semibold"> cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
        hover:shadow-md  cursor-pointer
        text-slate-600 text-base"
        >
          Clear <RiRefreshFill size={20} />
        </motion.p>
      </div>
      {/* Bottom section */}
      <div className=" w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div
          className="w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3
        overflow-y-scroll scrollbar-none"
        >
          {/* Cart item */}
          <div
            className=" w-full p-1 px-2 rounded-lg bg-cartItem flex
            items-center gap-2"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netflix-app-5a239.appspot.com/o/Images%2F1677334373731-f6.png?alt=media&token=5042a502-8f13-4f08-8bd1-a514c0ba555d"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
              alt=""
            />
            {/* name section */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Chocolate vanilla</p>
              <p className="text-sm block text-gray-300 font-semibold">$2.50</p>
            </div>
            {/* button section */}
            <div className=" group flex items-center gap-2 ml-auto cursor-pointer ">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50" />
              </motion.div>
              <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* total section */}
        <div
          className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center
        justify-evenly px-8 py-2"
        >
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Sub Total</p>
            <p className="text-gray-400 text-lg">$8.5</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg">$2.5</p>
          </div>
          <div className="w-full border-b my-2 border-gray-600"></div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 font-semibold text-xl"> Total</p>
            <p className="text-gray-200 font-semibold text-xl">$11.5</p>
          </div>
          <motion.button whileTap={{ scale: 0.8 }} 
          type="button"
          className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 
          text-lg my-2 hover:shadow-xl transition-all duration-150 ease-out">Check Out</motion.button>
        </div>
      </div>
    </motion.div>
  );
}
