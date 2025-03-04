import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RestHeader = () => {

     const item=useSelector(state=>state.cartslice);
         
       console.log(item);
       
  return (
    <div className='container w-[80%] mt-5 mx-auto py-4 px-8 bg-gray-200 text-2xl flex justify-between'>

        <div>
             <p className='text-orange-400'>Swigy</p>
        </div>

        <div>
             <Link to="/cheakout">
                <p>Cart{`(${item.count})`}</p>
             </Link>
        </div>
    </div>
  )
}

export default RestHeader