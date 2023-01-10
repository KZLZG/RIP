import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
     user: undefined,
 }

 const userSlice = createSlice({
     name: "user",
     initialState,
     reducers: {
         setUser(state, action) {
             state.user = action.payload;
         },
         logoutUser(state) {
             state.user = undefined;
         },
 }});

export const selectUser = (state) => state.user;
export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
