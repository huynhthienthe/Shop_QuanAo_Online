import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    DiaChi: {
      listDiaChi: null,
      isFetching: false,
      error: null,
    },
    newAddress: {
      Success: false,
      isCreating: false,
      error: null,
    },
  },
  reducers: {
    getAddressStart: (state) => {
      state.DiaChi.isFetching = true;
      state.DiaChi.error = null;
    },
    getAddressSuccess: (state, action) => {
      state.DiaChi.isFetching = false;
      state.DiaChi.listDiaChi = action.payload;
    },
    getAddressFailed: (state, action) => {
      state.DiaChi.isFetching = false;
      state.DiaChi.error = action.payload;
    },
    createAddressStart: (state) => {
      state.newAddress.isCreating = true;
    },
    createAddressSuccess: (state,action) => {
      state.newAddress.isCreating = false;
      state.newAddress.Success = action.payload;
    },
    createAddressFailed: (state, action) => {
      state.newAddress.isCreating = false;
      state.newAddress.Success = false;
      state.newAddress.error = true;
    },
    deleteAddressStart: (state) => {
      state.DiaChi.isFetching = true;
    },
    deleteAddressSuccess: (state, action) => {
        state.DiaChi.isFetching = false;
        state.msg = action.payload;
    },
    deleteAddressFailed: (state, action) => {
        state.DiaChi.isFetching = false;
        state.DiaChi.error = true;
        state.msg = action.payload;
    },
    geteditAddressStart: (state) => {
        state.DiaChi.isFetching = true;
    },
    geteditAddressSuccess: (state, action) => {
        state.DiaChi.isFetching = false;
        state.msg = action.payload;
        state.DiaChi.listDiaChi = action.payload;
    },
    geteditAddressFailed: (state, action) => {
        state.DiaChi.isFetching = false;
        state.DiaChi.error = true;
        state.msg = action.payload;
    },
  },
});

  
  export const {
    getAddressStart,
    getAddressSuccess,
    getAddressFailed,
    createAddressStart,
    createAddressSuccess,
    createAddressFailed,
    geteditAddressStart,
    geteditAddressSuccess,
    geteditAddressFailed,
    deleteAddressStart,
    deleteAddressSuccess,
    deleteAddressFailed,
  } = addressSlice.actions;
  
  export default addressSlice.reducer;