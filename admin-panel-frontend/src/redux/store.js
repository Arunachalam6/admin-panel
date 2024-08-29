import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './slices/adminSlice';
import studentReducer from './slices/studentSlice';

const store = configureStore({
    reducer: {
        admin: adminReducer,
        students: studentReducer,
    },
});

export default store;