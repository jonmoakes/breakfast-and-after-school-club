import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { account, databases } from "../../utils/appwrite/appwrite-config";
import { ID, Query } from "appwrite";

const currentUser = (id, createdAt, name, email, walletBalance) => {
  return { id, createdAt, name, email, walletBalance };
};

export const signInAsync = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();

      const findCurrentUser = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", user.$id)]
      );

      const { id, name, createdAt, walletBalance } =
        findCurrentUser.documents[0];

      return currentUser(id, createdAt, name, email, walletBalance);
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

      const createdUser = {
        id: user.$id,
        createdAt: user.$createdAt,
        name: user.name,
        email: user.email,
        walletBalance: 0,
      };

      await databases.createDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        user.$id,
        createdUser
      );

      return createdUser;
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

      const findCurrentUser = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", user.$id)]
      );

      const { id, name, email, createdAt, walletBalance } =
        findCurrentUser.documents[0];

      return currentUser(id, createdAt, name, email, walletBalance);
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
    setWalletBalance(state, action) {
      state.currentUser.walletBalance = action.payload;
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

export const { resetErrorMessage, setCurrentUser, setWalletBalance } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
