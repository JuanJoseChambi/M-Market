import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const productsSlice = createSlice({
  name: "products", //Nombre del slice
  initialState: {
    productsAll: [],
    products: [],
    currentPage: 1,
  },
  reducers: {
    setProducts: (state, action) => {
      state.productsAll = action.payload;
      state.products = action.payload
    },
    setFiltred: (state, action) => {
      const category = action.payload;
      state.products = state.productsAll.filter(products => products.Categories.find(categorie => categorie.name === category))
    },
    setCurrentPage: (state, action) => {
      const page = action.payload;
      state.currentPage = page
    },
    setPrevPage: (state, action) => {
      state.currentPage--
    },
    setNextPage: (state, action) => {
      state.currentPage++
    }

  },
});
// Action creators are genereted for each case reducer
export const { setProducts , setFiltred, setPrevPage, setNextPage, setCurrentPage} = productsSlice.actions;

export default productsSlice.reducer;

export function allProducts() {
    return async function (dispatch) {
      var productos = (await axios.get("/product"))
      dispatch(setProducts(productos.data))
    }
  }