import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //any data that comes in will be saved to initialState
    SetUser(state, actioin) {
      state.user = actioin.payload;
    },
    RemoveUser(state) {
      state.user = null;
    },
  },
});

//export the reducer
export const { SetUser, RemoveUser } = AuthSlice.actions;
export default AuthSlice.reducer;
