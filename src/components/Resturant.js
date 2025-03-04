import React, { useEffect, useState } from 'react'

const Resturant = () => {

       const [RestData1,SetRestdata]=useState({});
  
      useEffect(()=>{

        const Fetchdata=async()=>{
               
            const response=await fetch("");
            const data=await response.json();
            SetRestdata(data);
         
        }

        Fetchdata();
      },[]);

      console.log(RestData1);
      
         
     
}

export default Resturant