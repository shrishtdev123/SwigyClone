import React, { useState } from 'react'
import { RestInfo } from './RestInfo'

const MenuCard = ({menuItem,selected}) => {


     const [isOpen,setIsOpen]=useState(true);

     if('categories' in menuItem){
      
         return(
             <div className='w-full'>
                 <p className='text-2xl font-bold'>{menuItem?.title}</p>
                 <div>
                   {
                     menuItem?.categories?.map((items)=><MenuCard key={items?.title} menuItem={items}></MenuCard>)
                   }
                 </div>
             </div>
         )
     }


       if(!isOpen)
      {
         return(
            <div className='w-full'>
            <div className='flex justify-between w-full'>
            <p className='text-3xl font-bold mb-4'>{menuItem?.title}</p>
            <button className='text-5xl font-bold mr-20' onClick={()=>setIsOpen(!isOpen)}>
                {isOpen?"show":"hide"}
            </button>
            </div>
            <div className='h-5 bg-gray-600 mt-2 mb-2'></div>
            </div>
         )
       }

        // logic to find  the veg food
        if(selected==="veg"){

            return(
              <div className='w-full'>
              <div className='flex justify-between w-full'>
               <p className='text-3xl font-bold mb-4'>{menuItem?.title}</p>
               <button className='text-5xl font-bold mr-20' onClick={()=>setIsOpen(!isOpen)}>
                   {isOpen?"show":"hide"}
               </button>
               </div>
           
          <div>
              {
                 menuItem?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id}
                    RestData={items?.card?.info}
                 />)
   
              }
          </div>
         
       </div>
            )
        }
       // logic to find non veg food
        if(selected==="nonveg"){

          return(
            <div className='w-full'>
            <div className='flex justify-between w-full'>
             <p className='text-3xl font-bold mb-4'>{menuItem?.title}</p>
             <button className='text-5xl font-bold mr-20' onClick={()=>setIsOpen(!isOpen)}>
                 {isOpen?"show":"hide"}
             </button>
             </div>
         
        <div>
            {
               menuItem?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id}
                  RestData={items?.card?.info}
               />)
 
            }
        </div>
       
     </div>
          )
        }


  return (  

     <div>
              {/* <div className='w-[80%] mt-20 mb-20'>
                 <button onClick={()=>setSelected(selected==='veg'?null:'veg')}
                  className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==='veg'?'bg-green-400':'bg-gray-400'}`}
                  >
                  Veg
                  </button>

                 <button
                  onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}
                  className={`text-2xl py-2 px-4  border rounded-2xl ${selected==="nonveg"?"bg-orange-400":"bg-gray-400"}`}
                  >
                    Non veg
                 </button>
              </div> */}
    <div className='w-full'>
           <div className='flex justify-between w-full'>
            <p className='text-3xl font-bold mb-4'>{menuItem?.title}</p>
            <button className='text-5xl font-bold mr-20' onClick={()=>setIsOpen(!isOpen)}>
                {isOpen?"show":"hide"}
            </button>
            </div>
        
       <div>
           {
              menuItem?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id}
                 RestData={items?.card?.info}
              />)

           }
       </div>
      
    </div>
    </div>
  )
}

export default MenuCard