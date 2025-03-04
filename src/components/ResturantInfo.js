
// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios';
// // const ResturantInfo = () => {

// //        const [data,setData]=useState({});


// //        // proxy url="https://cors-anywhere.herokupp.com/"
    
// //        useEffect(() => {
//wh //         const fetchData = async () => {
// //             try {

// //                 const proxyServer = "http://localhost:8080/";
// //                 const SwigyApi = 'https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.589076&lng=77.3776613&carousel=true';
                
// //                 const res=await fetch( proxyServer+SwigyApi)
// //                 const jsondata=await res.json();
// //                  setData(jsondata);
               
// //             } catch (error) {
// //                 console.error("Failed to fetch data:", error);
// //             }
// //         };
// //         fetchData();
// //     }, []);


// //        console.log(data);
       
// //   return (
// //     <div>ResturantInfo</div>
// //   )
// // }

// // export default ResturantInfo


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const RestaurantInfo = () => {
//   const [data, setData] = useState({});
 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
        
//          const swiggyApi ="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.589076&lng=77.3776613&carousel=true";

//         const response = await axios.get(swiggyApi);

//         setData(response.data);
//       } 
//       catch (err) 
//       {
        
//         console.error("Failed to fetch data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//    console.log(data);
   

//   return (
//     <div>
//       <h1>Proxy fetching data</h1>
//     </div>
//   );
// };

// export default RestaurantInfo;

import React, { useEffect, useState } from 'react';
import RestCard from './RestCard';
import Shimmer from './Shimmer';

const ResturantInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => 
        {
         
          try 
          {
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const swiggyUrl ="https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.589076&lng=77.3776613&carousel=true"
            const response = await fetch(proxyUrl+swiggyUrl)
            const text = await response.json();
        // console.log(text.data.cards);
           setData(text?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
            restaurants
            );
          } 
          catch (error) 
          {
              console.log(error);
              
          }

    }

    fetchData();
  }, []);

  
   console.log(data);

   // Shimmer Effect
    if(data.length==0){
      return <div>
            <Shimmer/>
      </div>
      
    }
   
  return (
    <div className='flex flex-wrap w-[80%] mx-auto mt-20 gap-5'>
         {
            data.map((restInfo)=>(<RestCard key={restInfo.info.id} restInfo={restInfo} />))
         }
     
       
    </div>
  );
};

export default ResturantInfo;