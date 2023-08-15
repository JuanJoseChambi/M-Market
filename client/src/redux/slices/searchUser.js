import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllUsers: [],
  Wanted: [],
};

export const searchUser = createSlice({
  name: "searchUser",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
        const data = action.payload; 
        state.AllUsers = data;
        state.Wanted = data;
    },
    search: (state, action) => {
        const searchTerm = action.payload;
        if (!searchTerm) {
            state.Wanted = state.AllUsers;
        }else {
            const minusValue = searchTerm.toLowerCase();
            state.Wanted = state.AllUsers.filter(user => user.id.toLowerCase().includes(minusValue) || user.email.toLowerCase().includes(minusValue)
            );
          }
    }
  },
});
// Action creators are genereted for each case reducer
export const { setUsers, search } = searchUser.actions;

export default searchUser.reducer;
