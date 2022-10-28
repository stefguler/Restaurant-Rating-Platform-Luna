import { configureStore, createSlice } from "@reduxjs/toolkit";

import authReducer from "./slices/Auth";
import profileReducer from "./slices/Profile";
import restaurantReducer  from "./slices/Restaurant";

const initialState = {
  value: false,
};

export default configureStore({
  reducer: {

    auth: authReducer,
    profile: profileReducer,
    restaurant: restaurantReducer
  }
})