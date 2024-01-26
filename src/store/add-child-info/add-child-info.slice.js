import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const addChildInfoAsync = createAsyncThunk(
  "addChildInfo",
  async ({ childInfo, name, email, databaseId, collectionId }, thunkAPI) => {
    try {
      const {
        childName,
        age,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      } = childInfo;

      const documentId = ID.unique();

      const dataToAdd = {
        parentName: name,
        parentEmail: email,
        childName,
        age,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      };
      await manageDatabaseDocument(
        "create",
        databaseId,
        collectionId,
        documentId,
        dataToAdd
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
    resetError() {
      return INITIAL_STATE;
    },
    resetAllChildInfoState(state) {
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

export const { setChildInfo, resetAllChildInfoState, resetResult, resetError } =
  addChildInfoSlice.actions;

export const addChildInfoReducer = addChildInfoSlice.reducer;
