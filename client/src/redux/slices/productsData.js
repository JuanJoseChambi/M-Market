import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const productsSlice = createSlice({
  name: "products", //Nombre del slice
  initialState: {
    products: [],
    currentPage: 1,
   },
   reducers: {
      setProducts: (state, action) => {
      state.products = action.payload;

    },
  },
});
// Action creators are genereted for each case reducer
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export function allProducts() {
    return async function (dispatch) {
      var productos = (await axios.get("/product"))
      dispatch(setProducts(productos.data))
    }
  }