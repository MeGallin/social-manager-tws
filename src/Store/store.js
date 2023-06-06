import { configureStore } from '@reduxjs/toolkit';
import { registerSlice, loginSlice, forgotPWSlice } from './authReducer';

export default configureStore({
  reducer: {
    userInfo: registerSlice.reducer,
    userLoginInfo: loginSlice.reducer,
    forgotPassword: forgotPWSlice.reducer,
  },
});
