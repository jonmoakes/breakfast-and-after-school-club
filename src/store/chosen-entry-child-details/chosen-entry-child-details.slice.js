import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const getChosenEntryChildDetailsAsync = createAsyncThunk(
  "getChosenEntryChildDetails",
  async ({ chosenEntry }, thunkAPI) => {
    try {
      const searchForChildNames = chosenEntry.length
        ? chosenEntry[0].childrensName
        : null;

      const getChosenEntryChildDetailsDocuments = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        [Query.search("childName", searchForChildNames)]
      );
      const { documents, total } = getChosenEntryChildDetailsDocuments;

      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  chosenEntryChildDetails: [],
  error: null,
};

export const chosenEntryChildDetailsSlice = createSlice({
  name: "chosenEntryChildDetails",
  initialState: INITIAL_STATE,
  reducers: {
    resetError(state) {
      state.error = null;
    },
    resetChosenEntryChildDetailsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChosenEntryChildDetailsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChosenEntryChildDetailsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chosenEntryChildDetails = action.payload;
        state.error = null;
      })
      .addCase(getChosenEntryChildDetailsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.chosenEntryChildDetails = [];
        state.error = action.payload;
      });
  },
});

export const { resetError, resetChosenEntryChildDetailsState } =
  chosenEntryChildDetailsSlice.actions;

export const chosenEntryChildDetailsReducer =
  chosenEntryChildDetailsSlice.reducer;
