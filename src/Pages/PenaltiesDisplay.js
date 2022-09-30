import React from "react";
import Navbar from "../Components/Navbar";
import ImageBG from "../Assets/Group 1.png";
import Penalitycard from "../Components/PenaltyCard";
const PenaltiesDisplay = () => {
    return (
        <>
         <div>
      <Navbar />
      <img src={ImageBG} className="absolute top-0 right-0 mt-20 -z-10"/>
      <div className="flex flex-row justify-center items-center gap-6 customFont">
      <div className=" w-1/2 flex flex-col pl-16 pt-16 mr-10 ">
      
          <div className="mb-8 mt-5">
          <p className="font-bold text-xl"> Here are your</p>
          <p className="font-bold text-3xl"> Fines/Penalties Details</p>
            </div>
            <div className="flex flex-row gap-16 pb-8">
            <div>
                <p className="text-sky-500">
                    Model
                </p>
                
                <p className="font-bold">Activa</p>
                </div>
                <div>
                    <p className="text-sky-500">
                        Owner
                    </p>
                    
                    <p className="font-bold">Random</p>
                </div>
            </div>
            <div className="flex flex-row gap-16">
            <div>
                <p className="text-sky-500">
                    Model
                </p>
                
                <p className="font-bold">Activa</p>
                </div>
                <div>
                    <p className="text-sky-500">
                        Owner
                    </p>
    
                    <p className="font-bold">Random</p>
                </div>
            </div>
            <div className="pt-8">
             <p className="text-sky-500 font-semibold">
                Details
             </p>
             <Penalitycard />
             <Penalitycard />
            </div>
            <a href="./DashBoard">
          <button type="button"
                className="bg-sky-700 mt-24 px-4 py-2 rounded-lg mr-4 drop-shadow-md" > 
                <p className="text-white font-semibold">Back</p>
            </button>
          </a>
          </div>
         

<div className="flex flex-col justify-center">
 
 <div className="-mt-10">
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
export default PenaltiesDisplay;