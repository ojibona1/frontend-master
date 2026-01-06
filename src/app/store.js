import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import commentReducer from '../features/comments/commentSlice'
import subscribeReducer from '../features/subscription/subscrptionSlice';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    comment : commentReducer,
    subscribe : subscribeReducer,
  },
});
