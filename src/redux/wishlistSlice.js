import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
    
        //list of actions

        //add to wishlits

        addtoWishlist:(state,action)=>{
            state.push(action.payload);
        },

        //delete from wishlist

        removeWishlist: (state,action)=>{

            if(state.length>0)
            {
                return state.filter(i=>i.id!=action.payload)
            }
        }

    }
})

export default wishlistSlice.reducer;

export const {addtoWishlist,removeWishlist}=wishlistSlice.actions