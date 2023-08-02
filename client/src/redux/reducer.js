import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: "fanta Naranja",
    precio:"$800",
}

export const reducerSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers:{  
    setProducts: (state, action)=>{
      state.name= action.payload.name;
      state.precio= action.payload.precio;
    }
  }
})
 // Action creators are genereted for each case reducer
export const { setProducts } = reducerSlice.actions;
  

export default reducerSlice.reducer;