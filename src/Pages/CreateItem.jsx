import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdAttachMoney,
  MdFoodBank,
} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "../Components/Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { getAllFoodItems, saveItem } from "../utils/firebaseFunctions";

export default function CreateContianer() {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // changed receently
  // const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      // dispatch({
      //   type: actionType.SET_FOOD_ITEMS,
      //   foodItems: data,
      // });
      console.log(data);
    });
  };

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded Successfully");
          setAlertStatus("Success");
          setTimeout(() => {
            setFields(fields);
          }, 4000);
        });
      }
    );
    console.log("This is the image", imageFile);
  };
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
    console.log("deleteeee");
  };
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("The required fields cannot be Empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        clearData();
        setFields(true);
        setMsg("Data uploaded successfully");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    console.log("deleteeee");
  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };
  return (
    <div className=" w-full  h-auto min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border gap-4 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold
          ${
            alertStatus === "danger"
              ? "bg-red-400 text-red-800"
              : "bg-emerald-400 text-emerald-800"
          }`}
          >
            {msg}
          </motion.p>
        )}
        <div className=" w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Give me a title...."
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-slate-500"
          />
        </div>
        <div className="w-full">
          <select
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 
          rounded-md cursor-pointer"
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id=""
          >
            <option value="other" className="bg-white">
              {" "}
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  value={item.urlParamName}
                  className="text-base bg-white text-gray-700 border-0 outline-none capitalize"
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div
          className=" group flex justify-center items-center flex-col
        border-2 border-dotted border-gray-300 w-full h-[225px] md:h-[420px]
        cursor-pointer rounded-lg"
        >
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label
                    htmlFor=""
                    className="w-full h-full flex flex-col items-center
            justify-center cursor-pointer"
                  >
                    <div
                      className="w-full h-full flex flex-col items-center
            justify-center"
                    >
                      <MdCloudUpload className=" text-gray-500 text-3xl hover:text-gray-700 " />
                      <p className="text-gray-500  hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-52 md:w-auto md:pl-20 mx-auto h-full"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="upload image"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button "
                      className=" absolute bottom-3 right-3  p-3
                  rounded-full bg-red-500 text-xl cursor-pointer
                   outline-none ease-in-out hover:shadow-md duration-500 transition-all"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none
                border-none placeholder:text-gray-400 text-slate-500"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none
                border-none placeholder:text-gray-400 text-slate-500"
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full border-none outline-none bg-emerald-500 px-12
           py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
