import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { SidebarData } from "../../components/Nav/SidebarData";


export const productsSlice = createSlice({
  name: "products", //Nombre del slice
  initialState: {
    productsAll: [],
    products: [],
    currentPage: 1,
    categories: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
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
    },
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.cart.find(product => product.id === productToAdd.id);
      
      if (existingProduct) {
          existingProduct.unit += 1;
      } else {
          state.cart.push({ ...productToAdd, unit: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((product) => product.id === itemId);
      if(item) {
        item.unit += 1;
      };
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((product) => product.id === itemId);
      if(item && item.unit > 1) {
        item.unit -= 1;
      };
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter(product => product.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
});
// Action creators are genereted for each case reducer
export const { setProducts , setFiltred, setPrevPage, setNextPage, setCurrentPage, searchName, setCategory, addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = productsSlice.actions;

export default productsSlice.reducer;

export function allProducts() {
    return async function (dispatch) {
      var productos = (await axios.get("/product"))
      dispatch(setProducts(productos.data))
    }
  }