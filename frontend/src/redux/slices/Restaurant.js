import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    currentRestaurant: undefined,
    roger: '',
  },
  reducers: {
    setCurrentRestaurant: (state, action) => {
      state.currentRestaurant = action.payload
    },
  }
})

export const {setCurrentRestaurant} = restaurantSlice.actions;
export default restaurantSlice.reducer;