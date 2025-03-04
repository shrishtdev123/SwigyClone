import React from 'react'

const GroceryCard = ({Groceryitem}) => {
  return (
    <div >
       
            <a href={Groceryitem?.action?.link}>
            <img className='w-40 h-50' src={`https://media-assets.swiggy.com/swiggy/image/upload/${Groceryitem.imageId}`} alt="" />
            </a>
              <h2 className='font-bold'>{Groceryitem?.action?.text}</h2>
       
    </div>
  )
}

export default GroceryCard