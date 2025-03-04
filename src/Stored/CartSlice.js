import { createSlice } from "@reduxjs/toolkit";

 const cart=createSlice({
       name:"cartslice",
       initialState:{
            items:[],
            count:0,
            name:"shrisht dev"
       },
       reducers:{
           // additem
              addItems:(state,action)=>{
                   
                    state.items.push({...action.payload,quantity:1});
                    state.count++;
              },
           // increment count
           IncrementItem:(state,action)=>{

               const element=state.items.find((item)=>item.id===action.payload.id);
               element.quantity+=1;
               state.count++;
           },
           // decrement count
           DecrementItem:(state,action)=>{

            const element=state.items.find((item)=>item.id===action.payload.id);
             
                  if(element.quantity>1){
                       element.quantity-=1;
                  }
                  else{

                     state.items=state.items.filter((item)=>item.id!=action.payload.id)
                  }
                  state.count--;
           }
       }
 }) 

 export const {addItems,IncrementItem,DecrementItem}=cart.actions;

 export default cart.reducer
