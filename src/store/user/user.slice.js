import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

export const signInAsync = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name }, thunkAPI) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailSession(email, password);
      const user = await account.get();
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInGoogleAsync = createAsyncThunk(
  "user/signInGoogle",
  async (thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        console.log("Running in development mode");
        account.createOAuth2Session(
          "google",
          "http://localhost:8888/account",
          "http://localhost:8888/sign-in"
        );
        const user = await account.get();
        return user;
      } else if (import.meta.env.MODE === "production") {
        console.log("Running in production mode");
        account.createOAuth2Session(
          "google",
          "https://breakfast-and-after-school-club.netlify.app/account",
          "https://breakfast-and-after-school-club.netlify.app/sign-in"
        );
        const user = await account.get();

        return user;
      }
      //switch links in production
      // account.createOAuth2Session(
      //   "google",
      //   "http://localhost:8888/account",
      //   "http://localhost:8888/sign-in"
      // );
      // const user = await account.get();
      // return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (thunkAPI) => {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    resetErrorMessage(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signInGoogleAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInGoogleAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(signInGoogleAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signUpAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserOnLoadAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOnLoadAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getUserOnLoadAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetErrorMessage, setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
