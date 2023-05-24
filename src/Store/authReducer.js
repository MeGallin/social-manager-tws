import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Register a User
export const register = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_END_POINT}api/v1/user/register`,
        formData,
        config,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const registerSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

//Login a USER
export const login = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_END_POINT}api/v1/user/login`,
        formData,
        config,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer } = registerSlice;
export default registerSlice;
