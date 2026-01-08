import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import commentReducer from '../features/comments/commentSlice'
import subscribeReducer from '../features/subscription/subscrptionSlice';
import productReducer from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    comment : commentReducer,
    subscribe : subscribeReducer,
    products : productReducer,
  },
});
