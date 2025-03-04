import React from "react";

import ReactDOM from "react-dom/client"
import "./src/index.css";
import Resturant from "./src/components/Resturant";
import ResturantInfo from "./src/components/ResturantInfo";
import Home from "./src/components/Home";
import ResturantMenu from "./src/components/ResturantMenu";
import Searchfood from "./src/components/Searchfood";
import SecondaryHome from "./src/components/SecondaryHome";
import { Provider } from "react-redux";
import store from "./src/Stored/store";
import Cheakout from "./src/components/Cheakout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App=()=>{

    return(
         <div>
             <Provider store={store}>
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/cheakout" element={<Cheakout/>}></Route>

                    <Route element={<SecondaryHome/>}>
                    <Route path="/resturant" element={<ResturantInfo/>}></Route>
                    <Route path="/city/delhi/:id" element={<ResturantMenu/>}/>
                    <Route path="/city/delhi/:id/search" element={<Searchfood/>}/>
                   </Route>

                </Routes>
             </BrowserRouter>
             </Provider>
             
           
            
         </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)

