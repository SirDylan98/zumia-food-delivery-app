import React from "react";
import { data } from "../Data/data.js";
import { useState } from "react";
export default function Menu() {
  const [meals, setMeals] = useState(data);
  // filter types
  const filtertype = (category) => {
    setMeals(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  // filter by price
  const filterprice =(price)=>{
    setMeals(data.filter((item)=>{return item.price===price }))
  }
  return (
    <div className="w-full flex flex-col p-4 justify-center items-center">
      {/* heading */}
      <div>
        <h1 className="text-orange-500 font-bold text-3xl">
          Top Rated Meals Menu
        </h1>
      </div>
      {/* Filter by */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <div className=" mt-4 ml-4">
          <h1 className=" text-lg font-bold">Filter by type</h1>
          <div className="text-orange-500 mt-4">
            <button onClick={()=>setMeals(data)} className=" rounded-full border-orange-500 hover:bg-orange-500 hover:text-white px-6  mt-2 mr-3 ">
              All
            </button>
            <button onClick={()=>filtertype("Breakfast")} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6 mt-2  mr-3">
              Breakfast
            </button>
            <button onClick={()=>filtertype("Lunch")} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6 mt-2  mr-3">
              Lunch
            </button>
            <button onClick={()=>filtertype('Supper')} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6 mt-2  mr-3">
              Supper
            </button>
            <button onClick={()=>filtertype('Sadza')} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6 mt-2  mr-3">
              Sadza
            </button>
            <button onClick={()=>filtertype('Rice')} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6 mt-2  mr-3">
              Rice
            </button>
            <button onClick={()=>filtertype('Chips')} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6  mt-2 mr-3">
              Chips
            </button>
            <button onClick={()=>filtertype('Pork')} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6  mt-2 mr-3">
              Pork
            </button>
            <button onClick={()=>filtertype('Beef')} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6 mt-2  mr-3">
              Beef{" "}
            </button>
            <button onClick={()=>filtertype('Chicken')} className=" rounded-full border-orange-500  hover:bg-orange-500 hover:text-white px-6 mt-2  mr-3">
              Chicken
            </button>
          </div>
        </div>
        <div className=" mt-4 mr-4">
          <h1 className=" text-lg font-bold text-left ml-4 md:text-right">
            Filter by Price
          </h1>
          <div className="text-orange-500 mt-4 text-left">
            <button className=" rounded-full border-black  hover:bg-orange-500 hover:text-white mt-2 px-4 ml-2 ">
              $1.00
            </button>
            <button className=" rounded-full border-black  hover:bg-orange-500 hover:text-white mt-2 px-4  ml-2">
              $2.00
            </button>
            <button className=" rounded-full border-black  hover:bg-orange-500 hover:text-white mt-2 px-4  ml-2">
              $3.00
            </button>
          </div>
        </div>
      </div>
      {/* meals Cards */}
      <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4 ">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={meal.image}
              alt=""
              className="w-full object-cover h-[300px] rounded-lg"
            />
            <div className=" flex justify-between px-2 py-4">
              <p className=" font-bold">{meal.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-2 rounded-full">
                  {meal.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
