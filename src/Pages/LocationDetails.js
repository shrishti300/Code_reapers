import React from "react";
import Navbar from "../Components/Navbar";
import ImageBG from "../Assets/Group 1.png"
const LocationDisplay= () => {
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
            <p className="text-3xl font-bold">Location Details</p>
          </div>
         
          <div>
           <p className="text-blue-400">03/393 Kattankulathur, Guduvanchey 308002, Chennai</p>
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
  
  export default LocationDisplay;