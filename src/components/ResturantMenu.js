import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MenuCard from './MenuCard';

const ResturantMenu = () => {

     const {id}=useParams();
      const [selected,setSelected]=useState(null);
     console.log(id);
     

      const [Restdata, setRestdata] = useState([]);
     
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


     console.log(Restdata);
     
  return (
     <div>
               <div className='w-[80%] mx-auto mt-20 mb-20'>
                 <a href={`/city/delhi/${id}/search`}>
                 <p className='w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl'>Search for Dishes</p>
                 </a>
               </div>
                <div className='w-[80%] mx-auto mt-20 mb-20'>
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
              </div>
    <div className='w-[80%] mx-auto mt-20'>
        {
           Restdata.map((menuItem)=><MenuCard key={menuItem?.card?.card?.title} menuItem={menuItem?.card?.card} selected={selected}/>)
        }
        
    </div>
    </div>
  )
}

export default ResturantMenu