import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import RestCard from './RestCard';
import MenuCard from './MenuCard';

const Searchfood = () => {

     const {id}=useParams();
     const [food,setFoode]=useState("");

          const [RestData, setRestdata] = useState([]);
          
            useEffect(() => {
              const fetchData = async () => 
                  {
                   
                    try 
                    {
                      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
                      const swiggyUrl =`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.589076&lng=77.3776613&restaurantId=${id}`
                      const response = await fetch(proxyUrl+swiggyUrl)
                      const text = await response.json();
     
                                     
                      const tempdata=text?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
     
                       // first we finde the data having title than set to in the state
     
                      const filterData=tempdata?.filter((item)=>'title' in item?.card?.card);
                     
                      setRestdata(filterData);
                    } 
                    catch (error) 
                    {
                        console.log(error);
                        
                    }
          
              }
          
              fetchData();
            }, []);
     
           console.log("search food page here");
           
          console.log(RestData);
          console.log(food);

          let count=0;
          
  return (
    <div className='w-[80%] mx-auto mt-20'>
      <input className='w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border' type="text" onChange={(e)=>setFoode(e.target.value)} placeholder='Search here' />
     
      <div className='w-[80%] mx-auto mt-20'>
        {
           RestData.map((menuItem)=><MenuCard key={menuItem?.card?.card?.title} menuItem={menuItem?.card?.card}/>)
        }
        
    </div>

      
    </div>
  )
}

export default Searchfood