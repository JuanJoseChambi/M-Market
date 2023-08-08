import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { SidebarData } from "../../components/Nav/SidebarData";


export const productsSlice = createSlice({
  name: "products", //Nombre del slice
  initialState: {
    productsAll: [],
    products: [],
    currentPage: 1,
    categories: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.productsAll = action.payload;
      state.products = action.payload;
    },
    setFiltred: (state, action) => {
      const category = action.payload;
      if (category === "Todo") {
      state.products = state.productsAll
      }else{
      state.products = state.productsAll.filter(products => products.Categories.find(categorie => categorie.name === category))
      }
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
    },
    searchName: (state, action) => {
      const name = action.payload;
      if (name == null) {
      state.products = state.productsAll;
      }else{
        state.products = state.productsAll.filter(products => products.name.toLowerCase().includes(name.toLowerCase()))
      }
    },
    setCategory: (state, action) => {
      state.categories = SidebarData.filter(category => state.productsAll.some(product => product.Categories.some(categoryInd => categoryInd.name === category.title)))
      console.log(state.categories);
    }
  },
});
// Action creators are genereted for each case reducer
export const { setProducts , setFiltred, setPrevPage, setNextPage, setCurrentPage, searchName, setCategory} = productsSlice.actions;

export default productsSlice.reducer;

export function allProducts() {
    return async function (dispatch) {
      var productos = (await axios.get("/product"))
      dispatch(setProducts(productos.data))
    }
  }