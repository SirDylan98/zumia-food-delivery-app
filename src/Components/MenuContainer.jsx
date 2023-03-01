import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { getAllFoodItems } from "../utils/firebaseFunctions";

export default function MenuContainer() {
    const [foodItems, setFoodItems] = useState([]);

    const fetchData = async () => {
      await getAllFoodItems ().then((data) => {
        setFoodItems(data);
      });
    };
    const [filter, setFilter] = useState ("chicken")
    useEffect(()=>{
        fetchData();

    },[filter])
  return (
    <section id="menu" className="w-full my-8">
      <div className=" w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl flex text-gray-700 font-semibold capitalize 
          before:absolute before:rounded-lg before:content before:w-32
          before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 
          transition-all ease-in-out duration-100 relative mr-auto"
        >
          Our Hot Dishes
        </p>
        <div className=" w-full flex items-center justify-start py-6  lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none">
            {categories&&categories.map((category)=>(

          <motion.div
          whileTap={{scale:0.75}}
          onClick={()=>{setFilter(category.urlParamName)}}
          key={category.id}
            className={`group ${filter===category.urlParamName?'bg-red-600': 'bg-white' } w-24 min-w-[94px] h-28
            cursor-pointer rounded-lg drop-shadow-xl mx-2 flex flex-col gap-3 items-center
            justify-center duration-75  hover:bg-red-600 transition-all ease-in-out`}
          >
            <div
              className={`w-10 h-10 rounded-full ${filter===category.urlParamName?'bg-white': 'bg-red-600' } group-hover:bg-slate-200
                flex items-center justify-center`}
            >
              <IoFastFood size={20} className={`${filter===category.urlParamName?'text-slate-600': 'text-white' } shadow-lg group-hover:text-slate-500 text-lg`} />
            </div>
            <p className={`text-sm ${filter===category.urlParamName?'text-white': 'text-slate-600' }  group-hover:text-white`}>{category.name}</p>
          </motion.div>    
            ))}
        </div>
        <div className=" w-full">
            <RowContainer flag={false} data={foodItems?.filter(n=>n.category==filter)} />

        </div>
      </div>
    </section>
  );
}
