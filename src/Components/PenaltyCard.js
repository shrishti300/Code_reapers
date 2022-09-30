import React from 'react';
const Penalitycard = () =>
{
   return (
        <>
 
 <div className="bg-white border-gray-200 border-2 rounded-xl mt-2 drop-shadow-md p-4 max-w-">
             <div className="flex flex-row gap-32 mb-4 ">
                 <div className="flex flex-col">
                 <p className="text-blue-500 text-xs">Source</p>
                 <p className='text-l '>Random</p>
                 </div>
                 <div className="flex flex-col ">
                 <p className="text-blue-500 text-xs">  Date</p>
                 <p>21/09/2022</p>
                 </div>
                
             </div>
             <div className="flex flex-row gap-32 mb-4">
                 <div className="flex flex-col">
                 <p className="text-blue-500 text-xs">Violator's Name</p>
                 <p>XYZ</p>
                 </div>
             </div>
             <div>
             <div className="flex flex-row gap-32 bg-blue-100  border-gray-100 rounded-xl ">
                 <div className="flex flex-col m-2">
                 <p className="text-blue-500 text-xs">Amount</p>
                 <p>50000</p>
                 </div>
                 <div className="flex flex-col m-2">
                 <p className="text-blue-500 text-xs">Status</p>
                 <p>Paid</p>
                 </div>
             </div>
          </div>
          </div>
        </>

    );
};
export default Penalitycard;