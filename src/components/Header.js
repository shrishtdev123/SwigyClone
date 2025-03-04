import React from 'react'
// import { Link } from 'react-router'
import { Link } from 'react-router'

// first div:swigy ka logo
const Header = () => {
  return (
    <header className='bg-orange-600 font-serif '>
       {/* first part of header */}
      <div className='flex justify-between container mx-auto py-8 '>
         <img className='w-40 h-12' src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />
         <div className=' text-white text-base font-bold flex gap-15 items-center'>
        <a href="https://www.swiggy.com/corporate/" target='_blank'>Swiggy Coprate</a>
        <a href="https://partner.swiggy.com/login#/swiggy" target='_blank'>Partner with Us</a>
        <a className='border border-white py-3 px-4 rounded-2xl' href="" target='_blank'>Get the App</a>
        <a className='border border-black bg-black py-3 px-4 rounded-2xl' href="" target='_blank'>Sign in</a>
         </div>
      </div>

          {/* second part of header */}
      <div className='pt-16 pb-8 relative'>

       <img
          className='h-110 w-60 absolute top-0 left-0'
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />

       <img
          className='h-110 w-60 absolute top-0 right-0'
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
          <div className='max-w-[60%] text-5xl text-white font-bold container mx-auto text-center'>
            Order food & groceries. Discover best restaurants. Swiggy it!
          </div>
          <div className='max-w-[70%] container mx-auto flex justify-center items-center gap-4 mt-5'>
            <input className='bg-white w-[40%] text-md px-6 py-4 rounded-2xl' placeholder='Delhi, India' />
            <input className='bg-white w-[55%] text-md px-6 py-4 rounded-2xl' placeholder='Search Restaurant and item for more' />
          </div>

      </div>

          {/* third part of header */}
      <div className='max-w-[80%] container mx-auto flex justify-center'>
          <a href="/resturant">
            <img 
               className='w-50 h-60'
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
            alt="" />
          </a>


          <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img 
               className='w-50 h-60'
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
            alt="" />
          </a>

          <a href="https://www.swiggy.com/dineout">
            <img 
               className='w-50 h-60'
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
            alt="" />
          </a>

          <a href="https://www.swiggy.com/genie">
            <img 
               className='w-50 h-60'
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
            alt="" />
          </a>
      </div>
    </header>
  )
}

export default Header