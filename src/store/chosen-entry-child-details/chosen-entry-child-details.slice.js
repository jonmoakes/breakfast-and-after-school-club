import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getChosenEntryChildDetailsAsync = createAsyncThunk(
  "getChosenEntryChildDetails",
  async ({ chosenEntry, databaseId, collectionId }, thunkAPI) => {
    try {
      const searchForChildNames = chosenEntry.length
        ? chosenEntry[0].childrensName
        : null;

      const searchIndex = "childName";
      const searchValue = searchForChildNames;

      const getChosenEntryChildDetailsDocuments =
        await listDocumentsByQueryOrSearch(
          databaseId,
          collectionId,
          searchIndex,
          searchValue,
          true
        );

      const { documents, total } = getChosenEntryChildDetailsDocuments;

      console.log(total);

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
