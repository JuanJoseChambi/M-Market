import { configureStore } from '@reduxjs/toolkit'
import productsData from './slices/productsData'


export const store = configureStore({
  reducer: {
    //AQUI VAN LOS REDUCERS DE CADA SLICE
    products: productsData
  }

})

export default store;