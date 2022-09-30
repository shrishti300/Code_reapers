import React, { useRef } from 'react';
import emailjs from "emailjs-com";
  const Mailer = () =>{
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_j51w84n','template_u4raumj',form.current,'aJ_Y_urrOBK2_4vaS').then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    
    return(
        <div className='flex flex-col justify-center border-gray-100 border-2 p-2 w-[27vw] rounded-xl bg-gradient-to-t from-white to-blue-50'>
        <form ref={form} onSubmit={sendEmail}>
            <h1 className='font-bold text-xl pb-2'>Send Mail to the Owner</h1>
            <div className='flex flex-col'>
            <div>
              <label className='font-bold pr-20 '>Name</label>
              <input type="text" name="name" className='flow-control border-gray-300 border-2 rounded-l ml-4' />
              </div>
              <div className='flex flex-row pt-4'>
                <label className='font-bold'>Enter Email ID</label>
                <input type="email" name="user_email" className='border-gray-300 border-2 rounded-l ml-4'></input>
                </div>
                
                
                <div className='flex flex-row pt-4'>
                <label className='font-bold '>Enter Message</label>
                <textarea className='border-gray-300 border-2 form-control ml-8 rounded-xl' name="message" rows='4' />
                </div>
                <div>       
                <input type="submit" className='form-control bg-red-100 btn btn-primary cursor-pointer px-6 rounded-lg font-semibold' value="Send" /></div>
                </div>
              </form>
        </div>
    )
  }
  export default Mailer;