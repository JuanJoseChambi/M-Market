import { configureStore } from '@reduxjs/toolkit'
import productsData from './slices/productsData'
import userAuth from './slices/userAuth';
import dashBoard from "./slices/dashBoard"


export const store = configureStore({
  reducer: {
    //AQUI VAN LOS REDUCERS DE CADA SLICE
    products: productsData,
    auth: userAuth,
    search: dashBoard
  }

})

export default store;