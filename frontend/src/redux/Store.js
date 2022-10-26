import { configureStore, createSlice } from "@reduxjs/toolkit";

import authReducer, { authSlice } from "./slices/Auth";
import profileReducer from "./slices/Profile";

const initialState = {
  value: false,
};

const configureStore = createSlice({
  name: "login",
  initialState,
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    setLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLogin } = authSlice.actions;

export default configureStore.reducer;
