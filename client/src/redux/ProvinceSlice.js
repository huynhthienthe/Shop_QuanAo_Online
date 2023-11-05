import { createSlice } from "@reduxjs/toolkit";

const ProvinceSlice = createSlice({
  name: "Province",
  initialState: {
    TinhThanh: {
      listProvince: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    getProvinceStart: (state) => {
      state.TinhThanh.isFetching = true;
      state.TinhThanh.error = null;
    },
    getProvinceSuccess: (state, action) => {
      state.TinhThanh.isFetching = false;
      state.TinhThanh.listProvince = action.payload;
    },
    getProvinceFailed: (state, action) => {
      state.TinhThanh.isFetching = false;
      state.TinhThanh.error = action.payload;
    },
  },
});

  
  export const {
    getProvinceStart,
    getProvinceSuccess,
    getProvinceFailed,
  } = ProvinceSlice.actions;
  
  export default ProvinceSlice.reducer;