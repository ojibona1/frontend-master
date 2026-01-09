import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productService";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    products: [],
    message : ''
};

export const getProducts = createAsyncThunk('products/get', async (data, thunkAPI) => {
    try {
        return await productsService.getAllProducts(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        reset : (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = ''
    }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload
        })
    }
})

export const {reset} = productSlice.actions
export default productSlice.reducer