import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/Auth"
import profileReducer from './slices/Profile'

export default configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    }
});