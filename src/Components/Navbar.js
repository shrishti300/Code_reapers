import { useLocation } from 'react-router-dom'
import React from "react";

const Navbar = ()=>{
    const location = useLocation();
  console.log(location.pathname);
    return(
        <>
            <div className={`flex justify-between h-[10vh] item-center ${location=='/dashboard' ? "drop-shadow-none":"shadow-md shadow-sky-200"}`}>
                <div>
                    <a href="/dashboard" className="no-underline">
                    <div>
                        <p className="text-sky-600 font-extrabold pt-5 pl-4 text-xl customFont">CAMIO</p>
                        </div>
                    </a>
                </div>
                <div className="flex justify-end pr-8 ">
                 <div className="pl-4">
                 <a href="./DashBoard">
                    <p className="text-s font-semibold pt-5 text-sky-500">Home</p>
                    </a>
                 </div>
                 <div className="pl-6">
                 <a href="https://parivahan.gov.in/analytics/">
                    <p className="text-s font-semibold pt-5 text-sky-500">Analytics</p>
                    </a>
                 </div>
                 <div className="pl-6">
                 <a href="./FetchDisplay">
                    <p className="text-s font-semibold pt-5 text-sky-500">My profile</p>
                    </a>
                 </div>
                 <div className="pl-6">
                 <a href="./Register">
                    <p className="text-s font-bold pt-5 text-sky-500 ">Login/Register</p>
                    </a>
                 </div>
                 
                 
                 

                </div>
                
            </div>
        </>
    )
}
export default Navbar;