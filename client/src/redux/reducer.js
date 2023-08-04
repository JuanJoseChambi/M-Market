import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  products: [],
};

export const reducerSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    //------- DatosProductos -----------------------------------------
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    
  },
});
// Action creators are genereted for each case reducer
export const { setProducts } = reducerSlice.actions;

export default reducerSlice.reducer;
