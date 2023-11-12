import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//API Call - createasyncthunk

// SYNTAX
// const fetchProducts=createAsyncThunk('(sliceName)/asyncthunk name',async()=>{

//     const result=await axios.get('URL')

//     return result.data;
// })

export const fetchProducts = createAsyncThunk('(productlist)/fetchProducts', async () => {

    const result = await axios.get('https://fakestoreapi.com/products')

    return result.data;

})

//slice creation

const productSlice=createSlice({
    name:'productlist',
    initialState:{
        loading:false, //API Call nte output success aakam, reject aakam
        allProducts:[],
        searchArray:[],
        error:''
    },
    reducers:{

    //list of actions without API
    
    searchProduct:(state,action)=>{
        state.allProducts=state.searchArray.filter(i=>i.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
    }

    },
    extraReducers:(builder)=>{ //here fetchProducts will be coming in place of builder.
        //list of actions with API (NB: extra Reducer key is used whenever any API calls are there)
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.error="";
            state.allProducts=action.payload;
            state.searchArray=action.payload;
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.allProducts=[];
            state.error=action.payload;
        })
    }
})

export default productSlice.reducer

export const searchProduct=productSlice.actions.searchProduct;