import React from 'react'

import { Grocerydata } from './Utils/Grocery'
import GroceryCard from './GroceryCard'
const Grocery = () => {
  return (
    <div className='mt-20 w-[80%] container mx-auto' >
     <h1 className='font-bold w-[80%] container mx-auto'>Show Grocery on Instamart</h1>
        <div className='w-[80%] container mx-auto flex flex-wrap overflow-x-auto gap-3 mt-4'>
            {
                Grocerydata.map((Groceryitem)=>{
                
                return <GroceryCard key={Groceryitem?.id} Groceryitem={Groceryitem} />})
            } 
        </div> 
    </div>
  )
}

export default Grocery
