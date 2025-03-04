import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItems, DecrementItem, IncrementItem } from '../Stored/CartSlice.js';

export const RestInfo = ({RestData}) => {

       const [count,setCount]=useState(0);
       const dispatch=useDispatch();


     // makeing request to addItems in reducr in slice
     const handleAddItem=()=>{
      setCount(1);
      dispatch(addItems(RestData));
     }

//  makeing request to IncrementItem in reducr in slice
     const handleIncrement=()=>{

           setCount(count+1);
           dispatch(IncrementItem(RestData));
     }

   //  makeing request to Decrement in reducr in slice
     const handleDecrement=()=>{
           
      setCount(count-1);
      dispatch(DecrementItem(RestData));
     }
      
  return (
    <>
    <div className='flex w-full justify-between mb-2 pb-2'>
         <div className='w-[70%]'>
             <p className='text-2xl text-gray-700  font-semibold mb-1'>{RestData?.name}</p>
             {/* <p className='text-xl'>{"defaultPrice" in RestData?RestData?.defaultPrice/100:RestData?.price/100}</p> */}

             <p className='text-xl'>
              {RestData ? ("defaultPrice" in RestData ? RestData.defaultPrice / 100 : RestData.price / 100) : "N/A"}
             </p>
             <span className='text-green-700'>{RestData?.ratings?.aggregatedRating?.rating}</span>
             <span>{"("+RestData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
             <p>
                {
                    RestData?.description
                }
             </p>
         </div>
         <div className='w-[30%] relative h-42'>
             
             <img className='w-full h-36 object-cover rounded-3xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.imageId}`} alt="" />
             {
                count===0?(
                  <button className='absolute bottom-1 left-30 mt-4  shadow-md border border-white rounded-xl text-green-500 px-4 py-2  bg-white'

                  onClick={()=>handleAddItem()}
                  >
                  ADD</button>
                ):(
                    <div className='absolute flex gap-3 bottom-1 left-30 mt-4  shadow-md border border-white rounded-xl text-green-600 px-4 py-2  bg-white'>
                     <button
                      onClick={()=>handleDecrement()}
                      >-</button>
                     <span>{count}</span>
                     <button
                      onClick={()=>handleIncrement()}>+</button>
                    </div>
                )
             }
         </div>
      
    </div>
     <hr className='mb-6 mt-2 text-gray-400'></hr>
    </>
  )
}
