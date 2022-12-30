export {};
import { auth } from "../Resources/Firebase";

import { createSlice } from "@reduxjs/toolkit";

interface state {
  currentUser: any;
  loading: boolean;
}

const initialState: state = {
  currentUser: "",
  loading: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    signup(state, action) {
      auth.createUserWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      );
    },
    login(state, action) {
      auth.signInWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      );
    },
    logout(state, action) {
      auth.signOut();
    },
    resetPassword(state, action) {
      auth.sendPasswordResetEmail(action.payload.email);
    },
    updateEmail(state, action) {
      state.currentUser.updateEmail(action.payload.email);
    },
    updatePassword(state, action) {
      state.currentUser.updatePassword(action.payload.password);
    },
  },
});

export const cartActions = loginSlice.actions;
export default loginSlice;
