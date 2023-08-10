import { configureStore } from '@reduxjs/toolkit'
import productsData from './slices/productsData'
import userAuth from './slices/userAuth';


export const store = configureStore({
  reducer: {
    //AQUI VAN LOS REDUCERS DE CADA SLICE
    products: productsData,
    auth: userAuth,
  }

})

export default store;