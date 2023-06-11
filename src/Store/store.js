import { configureStore } from '@reduxjs/toolkit';
import {
  registerSlice,
  loginSlice,
  forgotPWSlice,
  logoutSlice,
} from './authReducer';

export default configureStore({
  reducer: {
    userInfo: registerSlice.reducer,
    userLoginInfo: loginSlice.reducer,
    forgotPassword: forgotPWSlice.reducer,
    logoutInfo: logoutSlice.reducer,
  },
});
