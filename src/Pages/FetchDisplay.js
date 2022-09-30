import React,{Component} from "react";
import Navbar from "../Components/Navbar";
import ImageBG from "../Assets/Group 1.png";
import Mailer from "../Components/Mailer";
class FetchDisplay extends Component {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }
  sendText = _ => {
    const { text } = this.state;
    fetch(`http://127.0.0.1:3000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

 render() {
    const { text } = this.state;
    const textArea={
      borderRadius:4
    }
    
        var Engine = ["162XXXXX",
            "323XXXXX",
            "458XXXXX",
            "852XXXXX",
            "689XXXXX",
            "656XXXXX",
            "782XXXXX",
            "324XXXXX",
            "687XXXXX",
            "964XXXXX",
            "321XXXXX",
            "887XXXXX",
            "636XXXXX",
            "114XXXXX",
            "101XXXXX",
            "393XXXXX",
            "741XXXXX",
            "189XXXXX",
            "110XXXXX",
            ];
        var OwnerName = ["SHAHNAZ LALARUKH",
            "YASHWANT PAL SINGH",
            "VIHAAN JAY KUMAR",
            "AVYAAN RADHE",
            "RUDRA AGARWAAL",
            "SAI KUMAR REDDY",
            "ARYAN RAJ SINGH",
            "DARSH SINGH RANA",
            "AARAV YADAV",
            "ASHVIK CHAURASIA",
            "SHIVANSH SAILUJA",
            "HAIDER HUSSAIN",
            "KISSA RIZWAN",
            "KRISHNA KUMAR", 
            "ISHAAN" ,
            "ATHARV GROVER",
            "VATSALYA VAJPAYEEE",
            "NISCHAY VERMA",
            "SHIVAM SINGHAL",
            ];
        
        var RegDate = ["20-Jan-12",
            "15-May-14",
            "16-Feb-10",
            "09-Apr-19",
            "18-Jun-08",
            "23-Jul-13",
            "12-Dec-12",
            "14-Oct-20",
            "20-Jan-12",
            "15-May-14",
            "16-Feb-10",
            "09-Apr-19",
            "18-Jun-08",
            "23-Jul-13",
            "12-Dec-12",
            "14-Oct-20",
            "15-May-14",
            "16-Feb-10",
            "09-Apr-19",
            ];
    
        var FuelType = ["PETROL",
            "PETROL",
            "PETROL",
            "PETROL",
            "PETROL",
            "PETROL",
            "PETROL",
            "DIESEL",
            "DIESEL",
            "PETROL",
            "DIESEL",
            "PETROL",
            "PETROL",
            "DIESEL",
            "DIESEL",
            "PETROL",
            "DIESEL",
            "PETROL",
            "PETROL",
            ];
    
        var Model = ["BMW 740 L",
            "SWIFT" ,
            "WAGONR 1.1",
            "CRETA 2.2",
            "ZEN",
            "ASPIRE",
            "AMAZE",
            "HONDA CITY",
            "ECOSPORTS",
            "XUV700",
            "SCORPIO",
            "BOLERO",
            "XUV700",
            "AUDI Q5",
            "SIWFT",
            "JEEP COMPAS",
            "SENTRO",
            "SCROSS",
            "SCROSS",
            ];
    
        var i = Math.floor(Math.random() * 15);
    return (
      <>
        <div >
          <Navbar />
          <img src={ImageBG} className="absolute top-0 right-0 mt-20 -z-10"/>
          <div className="flex flex-row justify-center items-center gap-6">
            <div className=" w-1/2 flex flex-col pl-16 pt-16 mr-10 mt-10">

              <div className="mb-1">
                <p className="font-bold text-xl"> Here are your</p>
                <p className="font-bold text-3xl"> Vehicle Details</p>
              </div>
              <div className="py-4 mt-4">
              <p className="text-xl  font-bold">Engine number</p>
            <p className="text-blue-400">{Engine[i]}</p>
            <p className="text-xl font-bold mt-4">Owner's Namer</p>
            <p className="text-blue-400">{OwnerName[i]}</p>
            <p className="text-xl  font-bold mt-4">Registration date</p>
            <p className="text-blue-400">{RegDate[i]}</p>
            <p className="text-xl font-bold mt-4">Fuel Type</p>
            <p className="text-blue-400">{FuelType[i]}</p>
            <p className="text-xl font-bold mt-4">Model Name</p>
            <p className="text-blue-400">{Model[i]}</p>

              </div>
              <div>      <Mailer /></div>
              <a href="./DashBoard">
              <button type="button"
                className="bg-sky-700 mt-10 px-4 py-2 rounded-lg mr-4 drop-shadow-md" > 
                <p className="text-white font-semibold">Back</p>
            </button>
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
    );
  }
};


export default FetchDisplay;