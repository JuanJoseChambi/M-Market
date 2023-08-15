import { configureStore } from '@reduxjs/toolkit'
import productsData from './slices/productsData'
import userAuth from './slices/userAuth';
import searchUser from "./slices/searchUser"


export const store = configureStore({
  reducer: {
    //AQUI VAN LOS REDUCERS DE CADA SLICE
    products: productsData,
    auth: userAuth,
    search: searchUser
  }

})

export default store;