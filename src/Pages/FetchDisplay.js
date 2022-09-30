import React from "react";
import Navbar from "../Components/Navbar";
import ImageBG from "../Assets/Group 1.png";

const FetchDisplay = () => {
    return (
        <>
         <div>
      <Navbar />
      <img src={ImageBG} className="absolute top-0 right-0 mt-20"/>
      <div className="flex flex-row justify-center items-center gap-6">
      <div className=" w-1/2 flex flex-col pl-16 pt-16 mr-10 ">
      
          <div className="mb-8">
          <p className="font-bold text-xl"> Here are your</p>
          <p className="font-bold text-3xl"> Vehicle Details</p>
            </div>
            <div className="py-4 mt-6">
            <p className="text-xl  font-bold">Vehicle License plate number</p>
            <p className="text-blue-400">BUSMJ2836827#</p>
            <p className="text-xl font-bold mt-4">Owner's Namer</p>
            <p className="text-blue-400">RamaSwami krishnan</p>
            <p className="text-xl  font-bold mt-4">Registration date</p>
            <p className="text-blue-400">BUSMJ2836827#</p>
            <p className="text-xl font-bold mt-4">Registered RTO</p>
            <p className="text-blue-400">Chennai, Tmil Nadu</p>
           
          </div>
          <a href="./DashBoard">
          <p className=" mt-10 text-l text-white bg-blue-400 w-[8vw] text-center border-gray-100 border-2 rounded-xl" >Back</p>
          </a>
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
      </div>
        </>
    )
};
export default FetchDisplay;