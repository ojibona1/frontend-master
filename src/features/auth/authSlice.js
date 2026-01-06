import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('eco-user'))

const initialState = {
    user : user ? user : null,
    isLoading : false,
    isError : false,
    isSuccess : false,
    message : ''
}

export const register = createAsyncThunk('auth/register', async(data, thunkAPI)=>{
    try {
        return await authService.regUser(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

export const logout = createAsyncThunk('auth/logout', async(_, thunkAPI)=>{
    try {
        return authService.logout()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

export const login = createAsyncThunk('auth/login', async(data, thunkAPI)=>{
    try {
        return await authService.loginUser(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})


const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        reset : (state)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(logout.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(logout.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(logout.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer