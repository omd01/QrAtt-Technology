import {configureStore} from '@reduxjs/toolkit';
// import { authReducer } from './reducer';
import authSlice from './reducer';
import messageSlice from './messageReducer';

const store = configureStore({
    reducer:{
        auth:authSlice,
        message:messageSlice
    }
})

export default store;
