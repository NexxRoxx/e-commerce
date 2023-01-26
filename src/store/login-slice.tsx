import { auth } from "../Resources/Firebase";
import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
  isFulfilled,
  isPending,
} from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ThunkMiddleware } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface state {
  currentUser: any;
  loading: boolean;
  error: string | unknown;
}

const initialState: state = {
  currentUser: undefined,
  loading: true,
  error: "",
};

export const logInFunction = createAsyncThunk("auth/signIn", async (e: any) => {
  return await signInWithEmailAndPassword(auth, "", "");
});
export const signUpFunction = createAsyncThunk(
  "auth/signUp",
  async (e: any) => {
    return await createUserWithEmailAndPassword(auth, "", "");
  }
);
export const signOutFunction = createAsyncThunk("auth/signOut", async () => {
  return await signOut(auth);
});

const fullfilledReducer = (state, action) => {
  state.loading = false;
  state.currentUser = action.payload.user;
};

const pendingReducer = (state) => {
  state.loading = false;
};

const rejectionReducer = (state, action) => {
  state.loading = false;
  state.error = action.payload.error;
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signOutFunction.fulfilled, (state) => {
      state.currentUser = null;
    });
    builder.addMatcher(
      isRejectedWithValue(logInFunction, signUpFunction, signOutFunction),
      rejectionReducer
    );
    builder.addMatcher(
      isFulfilled(logInFunction, signUpFunction),
      fullfilledReducer
    );
    builder.addMatcher(
      isPending(logInFunction, signUpFunction, signOutFunction),
      pendingReducer
    );
  },
});

export default loginSlice;
export const loginActions = loginSlice.actions;
