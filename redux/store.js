import {configureStore} from '@reduxjs/toolkit';
// import { authReducer } from './reducer';
import authSlice from './reducer';

const store = configureStore({
    reducer:{
        auth:authSlice,
    }
})

export default store;
