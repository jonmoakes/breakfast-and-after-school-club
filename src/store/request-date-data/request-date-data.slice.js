import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const requestDateDataAsync = createAsyncThunk(
  "requestDateData",
  async ({ chosenDate }, thunkAPI) => {
    try {
      const getChosenDateDocument = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID,
        [Query.equal("date", chosenDate)]
      );
      const { documents } = getChosenDateDocument;
      if (!documents.length) {
        throw new Error("is not available");
      } else {
        const { date, morningSessionSpaces, afternoonSessionSpaces } =
          documents[0];

        const requestedDateData = {
          date,
          morningSessionSpaces,
          afternoonSessionSpaces,
        };
        return requestedDateData;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const defaultRequestDateData = {
  chosenDate: "",
  isLoading: false,
  dateData: null,
  error: "",
};

const initialState = {
  requestDateData: defaultRequestDateData,
};

const requestDateDataSlice = createSlice({
  name: "requestDateData",
  initialState,
  reducers: {
    setChosenDate(state, action) {
      state.requestDateData.chosenDate = action.payload;
    },
    resetChosenDate(state) {
      state.requestDateData.chosenDate = "";
    },
    resetErrorMessage(state) {
      state.requestDateData.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestDateDataAsync.pending, (state) => {
        state.requestDateData.isLoading = true;
      })
      .addCase(requestDateDataAsync.fulfilled, (state, action) => {
        state.requestDateData.isLoading = false;
        state.requestDateData.chosenDate = "";
        state.requestDateData.dateData = action.payload;
        state.requestDateData.error = "";
      })
      .addCase(requestDateDataAsync.rejected, (state, action) => {
        state.requestDateData.isLoading = false;
        state.requestDateData.dateData = null;
        state.requestDateData.error = action.payload;
      });
  },
});

export const { setChosenDate, resetChosenDate, resetErrorMessage } =
  requestDateDataSlice.actions;

export const requestDateDataReducer = requestDateDataSlice.reducer;
