import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { motion } from "framer-motion";
import MealsCard from "./Components/MealsCard";
import Menu from "./Components/Menu";
import RowContainer from "./Components/RowContainer";
import MenuContainer from "./Components/MenuContainer";
import HomeContainer from "./Components/HomeContainer";
import { useEffect, useState } from "react";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Route, Routes } from "react-router-dom";
import CreateContianer from "./Pages/CreateItem";
import CartContainer from "./Components/CartContainer";

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  const [foodItems, setFoodItems] = useState([]);

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      setFoodItems(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full px-4">
              <HomeContainer />

              <section className="w-full my-6">
                <div className="w-full flex items-center justify-between">
                  <p
                    className="text-2xl text-gray-700 font-semibold capitalize 
          before:absolute before:rounded-lg before:content before:w-32
          before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 
          transition-all ease-in-out duration-100 relative"
                  >
                    Our fresh & healthy fruits
                  </p>
                  <div className="hidden md:flex items-center gap-3">
                    <motion.div
                      whileTap={{ scale: 0.75 }}
                      onClick={() => setScrollValue(-200)}
                      className="w-8 h-8 rounded-lg bg-orange-500 flex items-center
            justify-center hover:bg-orange-300 transition-all duration-100 ease-in-out hover:shadow-lg  "
                    >
                      {" "}
                      <MdChevronLeft className="text-lg text-white" />
                    </motion.div>
                    <motion.div
                      onClick={() => setScrollValue(200)}
                      whileTap={{ scale: 0.75 }}
                      className="w-8 h-8 rounded-lg bg-orange-500 flex items-center
            justify-center hover:bg-orange-300 transition-all duration-100 ease-in-out hover:shadow-lg  "
                    >
                      {" "}
                      <MdChevronRight className="text-lg text-white" />
                    </motion.div>
                  </div>
                </div>
                <RowContainer
                  scrollValue={scrollValue}
                  flag={true}
                  data={foodItems.filter((n) => n.category === "fruits")}
                />
              </section>
              <CartContainer/>

              <MenuContainer />
            </div>
          }
        />
        <Route path="/create" element={<CreateContianer />} />
      </Routes>
    </div>
  );
}

export default App;
