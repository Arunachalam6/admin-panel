import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchStudentsStart: (state) => {
            state.loading = true;
        },
        fetchStudentsSuccess: (state, action) => {
            state.loading = false;
            state.students = action.payload;
        },
        fetchStudentsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // Other CRUD actions...
    },
});

export const {
    fetchStudentsStart,
    fetchStudentsSuccess,
    fetchStudentsFailure,
    // Other CRUD actions...
} = studentSlice.actions;

export const fetchStudents = () => async (dispatch) => {
    dispatch(fetchStudentsStart());
    try {
        const response = await axios.get('/api/students');
        dispatch(fetchStudentsSuccess(response.data));
    } catch (error) {
        dispatch(fetchStudentsFailure(error.response?.data?.message || error.message));
    }
};

export default studentSlice.reducer;
