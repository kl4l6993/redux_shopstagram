import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        //list of actions or state updating functions.
        //add to cart
        addToCart:(state,action)=>{

            state.push(action.payload)

        },
        deletecart: (state,action)=>{
            if(state.length>0)
            {
                var index= state.indexOf(action.payload);
                state.splice(index,1);
            }
        },
        deleteall: (state)=>{
            
            return []
        }
    }

})

export default cartSlice.reducer

export const {addToCart,deletecart,deleteall} = cartSlice.actions