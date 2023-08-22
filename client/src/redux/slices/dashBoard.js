import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllUsers: [],
  WantedUser: [],
};

export const dashBoard = createSlice({
  name: "dashBoard",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
        const data = action.payload; 
        state.AllUsers = data;
        state.WantedUser = data;
    },
    search: (state, action) => {
        const searchTerm = action.payload;
        if (!searchTerm) {
            state.WantedUser = state.AllUsers;
        }else {
            const minusValue = searchTerm.toLowerCase();
            state.WantedUser = state.AllUsers.filter(user => user.id.toLowerCase().includes(minusValue) || user.email.toLowerCase().includes(minusValue)
            );
          }
    }
  },
});
// Action creators are genereted for each case reducer
export const { setUsers, search } = dashBoard.actions;

export default dashBoard.reducer;
