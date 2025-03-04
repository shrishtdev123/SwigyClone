import React from 'react'

const FoodCard = ({foodData}) => {
  return (
    <div>
       <a href={foodData?.action.link}>
       <img
         src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`
         }
          className='w-40 h-50 object-cover'
          alt="" />
       </a>
    </div>
  )
}

export default FoodCard