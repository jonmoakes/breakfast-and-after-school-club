import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

export const addChildInfoAsync = createAsyncThunk(
  "addChildInfo",
  async ({ childInfo, name, email }, thunkAPI) => {
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
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        ID.unique(),
        child
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  childInfo: {
    childName: "",
    age: "",
    medicalInfo: "",
    dietryRequirements: "",
    additionalInfo: "",
  },
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
      state.childInfo = INITIAL_STATE;
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
