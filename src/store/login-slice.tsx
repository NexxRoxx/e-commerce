import { auth } from "../Resources/Firebase";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {
  createSlice,
  applyMiddleware,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

interface state {
  currentUser: any;
  loading: boolean;
}

const initialState: state = {
  currentUser: undefined,
  loading: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload.user;
    },
  },
});

// export const logan = (email: any, password: any) => {
//   return auth.signInWithEmailAndPassword(email, password);
// };

// export const loginActions = loginSlice.actions;
// export default loginSlice;
export default loginSlice;
export const loginActions = loginSlice.actions;
