import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

export const addChildInfoAsync = createAsyncThunk(
  "addChildInfo",
  async (
    { childInfo, name, email, databaseId, childrenCollectionId },
    thunkAPI
  ) => {
    try {
      const {
        childName,
        age,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      } = childInfo;

      const child = {
        parentName: name,
        parentEmail: email,
        childName,
        age,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      };

      await databases.createDocument(
        databaseId,
        childrenCollectionId,
        ID.unique(),
        child
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const defaultChildInfo = {
  childName: "",
  age: "",
  medicalInfo: "",
  dietryRequirements: "",
  additionalInfo: "",
};

const INITIAL_STATE = {
  isLoading: false,
  childInfo: defaultChildInfo,
  result: "",
  error: null,
};

export const addChildInfoSlice = createSlice({
  name: "addChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    setChildInfo(state, action) {
      state.childInfo = action.payload;
    },
    resetResult(state) {
      state.result = "";
    },
    resetError(state) {
      state.error = null;
    },
    resetChildInfo(state) {
      state.childInfo = defaultChildInfo;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addChildInfoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addChildInfoAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.result = "fulfilled";
        state.error = null;
      })
      .addCase(addChildInfoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.result = "rejected";
        state.error = action.payload;
      });
  },
});

export const { setChildInfo, resetChildInfo, resetResult, resetError } =
  addChildInfoSlice.actions;

export const addChildInfoReducer = addChildInfoSlice.reducer;
