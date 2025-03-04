// import React from 'react'
// import { dineoutData } from './Utils/DineData'
// import Dinecard from './DineCard'




// const DineoutOption = () => {
//   return (
//     <div className='w-[80%] mx-auto'>
//         <p>Discover best restaurants on Dineout</p>
//        <div className='flex flex-nowrap overflow-x-auto mt-5'>
//              {
//                 dineoutData.map((RestData)=>(<Dinecard key={RestData?.info?.id} RestData={RestData}/>))
//              }
//        </div>
//     </div>
//   )
// }

// export default DineoutOption


import React from 'react';
import { dineoutData } from './Utils/DineData';
import Dinecard from './DineCard';

const DineoutOption = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <p className='text-3xl font-semibold'>Discover the best restaurants on Dineout</p>
      <div className='flex flex-nowrap overflow-x-auto mt-5 space-x-4'>
        {dineoutData.map((RestData) => (
          <Dinecard key={RestData?.info?.id} RestData={RestData} />
        ))}
      </div>
    </div>
  );
};

export default DineoutOption;