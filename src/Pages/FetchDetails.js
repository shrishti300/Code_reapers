import React from "react";
import Navbar from "../Components/Navbar";
import ImageBG from "../Assets/Group 1.png"
import Scan from "../Assets/scan_icon.png"
import Voice from "../Assets/voice_icon.png"
const FetchDetails = () => {
    return (
        <>
      <div>
      <Navbar />
      
      <form>
      <div className="flex flex-row justify-center items-center gap-6 customFont">
        <div className=" w-1/2 flex flex-col customFont">
          <div className="mb-8 mt-14">
            <p className="text-xl font-bold  my-4">You Selected</p>
            <p className="text-3xl font-bold">Fetch Vehicle Details</p>
          </div>
          <div className="py-4">
            <p className="text-xl mb-2">Enter the license plate number</p>
       <input type="text" id="fname" placeholder="AB 12 CD 3456"name="fname" className="bg-sky-100 border-2 rounded-lg w-[24vw] pl-4"/>
   
            <p className="mt-4 text-cyan-800 font-semibold">OR</p>
          </div>
          <div className="flex flex-row gap-6">
            
            <label class="w-32 flex flex-col items-center px-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Upload</span>
        <input type='file' id='myfile' name='myfile' class="hidden" />
    </label>
            {/* <button
              type="button"
              className="flex flex-row items-center justify-center bg-sky-400 px-6 py-2 rounded-xl ml-4"
            >
                <img src={Voice} className="pr-2"></img>
              <p className="text-white font-semibold">Voice</p>
            </button> */}
          </div>
            <div>
            <a href="./FetchDisplay">
            <button
                type="button"
                className=" bg-sky-700 mt-24 px-4 py-2 rounded-lg mr-4 drop-shadow-md"
            >   
                <p className="text-white font-semibold">Proceed</p>
            </button>
            </a>
            </div>
        </div>
        <div className=" flex flex-col justify-center customFont ">
 
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
        <img src={ImageBG} className="absolute top-0 right-0 mt-20 -z-10"/>
      </div>
      </>
    );
  };
  
  export default FetchDetails;