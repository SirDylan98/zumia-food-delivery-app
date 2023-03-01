import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
export default function RowContainer({ flag, data,scrollValue }) {
  console.log("This is my data",data)
  const rowContainer=useRef()
  useEffect(()=>{
    rowContainer.current.scrollLeft=+scrollValue;
  },[scrollValue])
  return (
    <div
    ref={rowContainer}
      className={`w-full flex gap-3 items-center scroll-smooth my-12 ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center scrollbar-none"
      } `}
    >
      {data&& data.map((item)=>(

      <div key={item.id} className=" w-[300px] h-[200px] min-w-[300px] md:min-w-[340px] md:w-[350px]  my-12 pr-3 
      hover:drop-shadow-lg bg-slate-100 mx-3 rounded-lg  flex flex-col gap-3 items-center justify-center backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <motion.div
          whileHover={{ scale: 1.2 }} 
        className=  {`w-40 drop-shadow-2xl h-40 -mt-8 `}>

          <img
            
            src={item?.imageURL}
            className={`w-full h-full object-contain `}
            alt=""
          />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full flex items-center justify-center 
            cursor-pointer hover:shadow-md bg-red-600"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col  items-end justify-end">
          <p className=" text-gray-500 font-semibold text-base md:text-lg">
            {item?.title}
          </p>
          {/* <p className=" mt-1 text-sm text-gray-500">{item?.calories}</p> */}
          <div className="flex items-center gap-2">
            <p className=" text-lg text-gray-700 font-semibold">
              <span className="text-sm text-red-500">$</span> {item?.price}
            </p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
