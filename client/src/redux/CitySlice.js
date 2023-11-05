import { createSlice } from "@reduxjs/toolkit";

const CitySlice = createSlice({
  name: "City",
  initialState: {
    ThanhPho: {
      listCity: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    getCityStart: (state) => {
      state.ThanhPho.isFetching = true;
      state.ThanhPho.error = null;
    },
    getCitySuccess: (state, action) => {
      state.ThanhPho.isFetching = false;
      state.ThanhPho.listCity = action.payload;
    },
    getCityFailed: (state, action) => {
      state.ThanhPho.isFetching = false;
      state.ThanhPho.error = action.payload;
    },
  },
});

  
  export const {
    getCityStart,
    getCitySuccess,
    getCityFailed,
  } = CitySlice.actions;
  
  export default CitySlice.reducer;