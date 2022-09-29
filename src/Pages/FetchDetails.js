import React from "react";
import Navbar from "../Components/Navbar";
import ImageBG from "../Assets/Group 1.png"
const FetchDetails = () => {
    return (
        <>
      <div>
      <Navbar />
      <img src={ImageBG} className="absolute top-0 right-0 mt-20"/>
      <form>
      <div className="flex flex-row justify-center items-center gap-6">
        <div className=" w-1/2 flex flex-col">
          <div className="mb-8">
            <p className="text-xl font-bold  my-4">You Selected</p>
            <p className="text-3xl font-bold">Fetch Vehicle Details</p>
          </div>
          <div className="py-4">
            <p className="text-xl mb-2">Enter the license plate number</p>
       <input type="text" id="fname" placeholder="AB 12 CD 3456"name="fname" className="bg-blue-100 border-2 rounded-lg w-[24vw] pl-4"/>
   
            <p className="mt-4 text-cyan-800 font-semibold">OR</p>
          </div>
          <div>
            <button
              type="button"
              className="bg-cyan-400 px-4 py-2 rounded-lg mr-4"
            >
              <p className="text-white font-semibold">Upload</p>
            </button>
            <button
              type="button"
              className="bg-cyan-400 px-6 py-2 rounded-lg ml-4"
            >
              <p className="text-white font-semibold">Voice</p>
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center   ">
 
        <div>
            <p className="font-bold text-2xl pt-16">Current Prices</p>
            <p className="text-s pt-4"> Details about current fuel prices</p>
        </div>
        <div className="p-2">
            <p className="font-bold text-l">Petrol</p>
            <p className="text-red-500 font-bold text-lg">Rs. 56.92/Lt</p>
        </div>
        <div className="p-2">
            <p className="font-bold text-l">Diesel</p>
            <p className="text-green-500 font-bold text-lg">Rs. 67.82/Lt</p>
        </div>
        <div className="p-2">
            <p className="font-bold text-l">CNG</p>
            <p className="text-green-500 font-bold text-lg">Rs. 70.0/Lt</p>
        </div>
        </div>


        </div>
        </form>
      </div>
      </>
    );
  };
  
  export default FetchDetails;