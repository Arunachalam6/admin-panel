import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        admin: null,
        loading: false,
        error: null,
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.admin = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.admin = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = adminSlice.actions;

export const loginAdmin = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await axios.post('/api/admin/login', credentials);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.response?.data?.message || error.message));
    }
};

export default adminSlice.reducer;
