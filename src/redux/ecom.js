import { createSlice } from "@reduxjs/toolkit";

const Ecom=createSlice({
    name:'product',
    initialState:{
        ecomInfo:[],
    },
    reducers:{
        cartItems:(state,action)=>{
            const {id}=action.payload;
            console.log('action payy',action.payload);
            const existingItem=state.ecomInfo.find(item=>item.id===id);
            console.log('existingggg',existingItem);

            if(existingItem){
                existingItem.quantity+=1;
            }else{
                state.ecomInfo.push({...action.payload,quantity:1});
            }
        }
    }
})
export const{cartItems}=Ecom.actions;
export default Ecom.reducer