import { configureStore } from '@reduxjs/toolkit';
import { registerSlice, loginSlice } from './authReducer';

export default configureStore({
  reducer: {
    userInfo: registerSlice.reducer,
    userLoginInfo: loginSlice.reducer,
  },
});
