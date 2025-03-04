import React from 'react'
import { useSelector } from 'react-redux';
const Cheakout = () => {
       
      
            const item=useSelector(state=>state.cartslice);
          
            console.log("this is cheakout page",item);
                 
            return (
              <div className='container w-[80%] mt-5 mx-auto py-4 px-8 bg-gray-200 text-2xl flex justify-between'>
          
                 <div>
                     {
                         item.items.map((item)=><div>{item.name}</div>)
                     }
                 </div>
                 
              </div>
            )
  
}

export default Cheakout