import React from 'react';
import Navbar from '../Components/Navbar';
import Car from '../Assets/Car.png';
import Ticket from '../Assets/Ticket.png';
import Location from '../Assets/Location.png';
import Img from '../Assets/carbg.png';

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-gradient-to-t from-sky-400 to-blue-700 p-16 imgContainer customFont">
        <div className="flex flex-col flex-justify justify-center">
          <div class="flex flex-justify justify-center">
            <p className="text-4xl font-bold text-white">License Plate </p>
          </div>
          <div class="flex flex-justify justify-center">
            <p className="text-4xl font-bold text-white">Recognition Portal </p>
          </div>
        </div>
      </div>
      <div className="flex flex-justify justify-center relative">
        <p className="text-2xl font-semibold p-4 customFont mt-4 mb-2"> Services we offer</p>
        <div className='absolute top-0 left-0 -z-10'>
            <img src={Img} alt="" className='w-3/5' />
        </div>
        {/* <img src={Img} className></img> */}
      </div>
      <div className="flex flex-row justify-center gap-12">
        <a href="./FetchDetails">
          <div className=" flex flex-col justify-center items-center shadow-inner border-2 border-gray-200 rounded-lg w-[15vw] h-[24vh] ease-in-out hover:scale-110 duration-150 bg-white">
            <img
              src={Car}
              alt="loading"
              className="w-[8vh] content-center"
            ></img>

            <p className=" overflow-hidden flex-wrap text-l font-semibold customFont">
              Fetch Vehicle Details{' '}
            </p>
          </div>
        </a>
        <a href="./PenaltiesDisplay">
          <div className=" flex flex-col justify-center items-center shadow-inner border-2 border-gray-200 rounded-lg w-[15vw] h-[24vh] ease-in-out hover:scale-110 duration-150 bg-white">
            <img
              src={Ticket}
              alt="loading"
              className="w-[8vh] content-center"
            ></img>

            <p className=" overflow-hidden flex-wrap text-l font-semibold customFont">
              Penalty Details{' '}
            </p>
          </div>
        </a>
        <a href="./LocationDetails">
          <div className=" flex flex-col justify-center items-center shadow-inner border-2 border-gray-200 rounded-lg w-[15vw] h-[24vh] ease-in-out hover:scale-110 duration-150 bg-white">
            <img
              src={Location}
              alt="loading"
              className="w-[8vh] content-center"
            ></img>

            <p className=" overflow-hidden flex-wrap text-l font-semibold customFont">
              Location Details{' '}
            </p>
          </div>
        </a>
      </div>
      <div className="flex flex-row gap-8 justify-center mt-12 customFont">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-xl">Don't want to register?</p>
          <p className="text-s w-[18vw] mt-2">
            Attach the image/video here to start Recognition process
          </p>
        </div>
        <div>
          <input type="file" id="myfile" name="myfile" />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;