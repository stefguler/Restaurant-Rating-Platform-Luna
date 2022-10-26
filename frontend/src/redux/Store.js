import { configureStore, createSlice } from "@reduxjs/toolkit";

import authReducer, { authSlice } from "./slices/Auth";
import profileReducer from "./slices/Profile";

const initialState = {
  value: false,
};

export default configureStore({
reducer: {
auth:authReducer,
profile: profileReducer}
})