import React from 'react'
import { imageGridCard } from './Utils/FoodData'
import FoodCard from './FoodCard'
const FoodOptions = () => {
  return (
    <div>
        <div className='w-[80%] container mx-auto flex flex-wrap justify-center mt-3 gap-3'>
            {
            imageGridCard.map((foodData)=>{
                
                return <FoodCard key={foodData.id} foodData={foodData}/>})
            } 
        </div> 
    </div>
  )
}

export default FoodOptions