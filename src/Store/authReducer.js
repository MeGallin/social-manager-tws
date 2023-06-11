import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

//Register a User
export const register = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
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
  name: 'user/register',
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
        state.error = action.error ? action.error.message : action.payload;
      });
  },
});

//User Login
export const loginAction = createAsyncThunk(
  'user/login',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_END_POINT}api/v1/user/login`,
        formData,
        config,
      );

      // Cookies.set('auth_cookie', data?.token, { expires: 7 });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginSlice = createSlice({
  name: 'user/login',
  initialState: {
    userInfo: null,
    loading: false,
    success: false,
    error: null,
    cookie: Cookies.get('auth_cookie'),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
        state.cookie = Cookies.set('auth_cookie', action.payload.token, {
          expires: 1,
        });
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : action.payload;
      });
  },
});

//Logout a USER
export const logoutAction = createAsyncThunk('user/logout', () => {
  return null;
});

export const logoutSlice = createSlice({
  name: 'user/logout',
  initialState: {
    userInfo: null,
    loading: false,
    success: false,
    error: null,
    cookie: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.loading = false;
        state.cookie = Cookies.remove('auth_cookie', { path: '' });
        state.success = true;
        state.userInfo = null;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : action.payload;
      });
  },
  reset: (state) => {
    state = {};
  },
});

//user forgot PW
export const forgotPW = createAsyncThunk(
  'user/forgot-password',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_END_POINT}api/v1/user/forgot-password`,
        formData,
        config,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const forgotPWSlice = createSlice({
  name: 'user/forgot-password',
  initialState: {
    loading: false,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPW.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPW.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(forgotPW.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : action.payload;
      });
  },
});
