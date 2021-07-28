import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';



const store = configureStore({
    reducer: {
        counterSlice: counterReducer,
        authSlice: authReducer
    }
});

export default store;