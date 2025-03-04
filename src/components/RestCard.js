import React from 'react'

const RestCard = ({restInfo}) => {


      console.log("data also come here",restInfo.info.cloudinaryImageId);
      
  return (
   <a href={`/city/delhi/${restInfo?.info?.id}`}>
      
      <div className='max-w-[280px] mb-2 transform transition duration-200 hover:scale-95'>

<img className='w-70 h-45 object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${restInfo?.info?.cloudinaryImageId}`} alt="" />

 <div className='w-[90%] mx-auto mt-3'>
 <div className='font-bold text-xl'>{restInfo?.info?.name}</div>
 <div className='flex gap-2'>
 <span className='text-lg'>{restInfo?.info?.avgRating}</span>
 <span className='text-lg font-semibold'>{restInfo?.info?.sla?.slaString}</span>
 </div>
    
  <div className='text-gray-600 mt-1 overflow-hidden h-7'>
      {
         restInfo?.info?.cuisines?.join(",")

      }
  </div>
 </div>
 

</div>
   </a>
  )
}

export default RestCard