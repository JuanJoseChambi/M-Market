import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    idUser: undefined
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
    getId: (state, action) => {
      const id = action.payload;
      state.idUser = id;
    },
    delId: (state, action) => {
      state.idUser = undefined;
    }
  },
});

export const { loginSuccess, logout, getId, delId } = authSlice.actions;

export default authSlice.reducer;