import React from "react";
import Navbar from "../Components/Navbar";
import Car from "../Assets/Car.png";
import Ticket from "../Assets/Ticket.png";
import Location from "../Assets/Location.png";
import Img from "../Assets/Police officer with police car in town.png"
const DashBoard = ()=>{
    return(
        <div>
        <Navbar/>
        <div className="bg-gradient-to-t from-blue-400 to-blue-500 p-16 ">
       <div className="flex flex-col flex-justify justify-center">
<div class="flex flex-justify justify-center">
<p className="text-3xl font-bold text-white">License Plate </p>
</div>
<div class="flex flex-justify justify-center">
<p className="text-3xl font-bold text-white">Recognition Portal </p>
</div>
</div>
       </div>
       <div className="flex flex-justify justify-center">
        <p className="font-bold p-4"> Services we offer</p>
       </div>
       <div className="flex flex-row justify-center gap-8">
    
            <div className=" flex flex-col justify-center items-center shadow-inner border-2 border-gray-300 rounded-lg w-[12vw] h-[24vh]">
            <img src={Car} className="w-[8vh] content-center"></img>
            
            <p className=" overflow-hidden flex-wrap text-l font-semibold">Fetch Vehicle details </p>
            </div>
            <div className=" flex flex-col justify-center items-center shadow-inner border-2 border-gray-300 rounded-lg w-[12vw] h-[24vh]">
            <img src={Ticket} className="w-[8vh] content-center"></img>
            
            <p className=" overflow-hidden flex-wrap text-l font-semibold">Fetch Vehicle details </p>
            </div> <div className=" flex flex-col justify-center items-center shadow-inner border-2 border-gray-300 rounded-lg w-[12vw] h-[24vh]">
            <img src={Location} className="w-[8vh] content-center"></img>
            
            <p className=" overflow-hidden flex-wrap text-l font-semibold">Fetch Vehicle details </p>
            </div>
            
       </div>
       <div className="flex flex-row gap-8 justify-center mt-8">
       <div className="flex flex-col justify-center">
 
        <p className="font-bold text-xl">
            Don't want to register?
        </p>
        <p className="text-s w-[18vw]">
            Attach the image/video here to start Recognition process
        </p>
        
       </div>
<div>
     <input type="file" id="myfile" name="myfile" />
</div>
       </div>
       <img src={Img} className="absolute bottom-0 left-0"/>
        </div>

    );
};
export default DashBoard;
