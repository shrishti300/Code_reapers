import React from "react";
import Navbar from "../Components/Navbar";
import Img from "../Assets/Police officer with police car in town.png" 
const Register = ()=>{
    return(
<>
<Navbar />
    <div className="flex flex-col gap-8 align-middle place-items-center pt-4 justify-center ">
<div>
<p className="text-4xl text-sky-500 font-bold ">Welcome, New User</p>
</div>
<div>
<div className="flex flex-col p-8 pb-16 bg-sky-100 border-2 border-gray-300">
<div>
    <p className="p-2 text-sky-400 font-bold">1. Personal Details</p>
</div>
<div>
   <p className="p-2 font-bold"> Enter the details Below to register</p>
</div>
<div className="flex flex-row p-2 gap-16 justify-left">
<div>
<p className="mt-4 mb-2">Enter First Name</p>
<input type="text" className="rounded-l border-l" />
</div>
<div>
  <p className="mt-4 mb-2"> Enter Last Name</p>
  <input type="text" className="rounded-l border-l"  />
</div>
</div>
<div>
    <p className="p-2">Valid ID proof</p>
</div>
<div>
<input type="file" id="myfile" name="myfile" className="p-2" />
</div>

</div>
 <img src={Img} className="absolute bottom-0 left-0"/>
    </div>
   </div>
</>
    );
};

export default Register;