import React from 'react'

const Dinecard = ({RestData}) => {
  return (
    <div className='max-w-sm flex-none'>
       <div className='relative'>

         <a href={RestData.cta.link}>
         <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.info?.mediaFiles[0]?.url}`} alt="" />
         </a>
           <p className='absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-50 px-2 py-1 rounded'>{RestData?.info?.name}</p>
           <p className='absolute bottom-4 right-4 text-white font-semibold bg-black bg-opacity-50 px-2 py-1 rounded'>{RestData?.info?.rating?.value}</p>
       </div>
    </div>
  )
}

export default Dinecard