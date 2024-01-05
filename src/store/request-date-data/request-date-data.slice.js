import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const requestDateDataAsync = createAsyncThunk(
  "requestDateData",
  async ({ chosenDate }, thunkAPI) => {
    try {
      const getChosenDateDocument = await databases.listDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID,
        [Query.equal("date", chosenDate)]
      );
      const { documents } = getChosenDateDocument;
      if (!documents.length) {
        throw new Error("is not available");
      } else {
        const { $id, date, morningSessionSpaces, afternoonSessionSpaces } =
          documents[0];

        const requestedDateData = {
          $id,
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
    setDateData(state, action) {
      state.requestDateData.dateData = action.payload;
    },
    resetDateData(state) {
      state.requestDateData.dateData = state.requestDateData.dateData = null;
    },
    resetErrorMessage(state) {
      state.requestDateData.error = "";
    },
    resetRequestDateDataState: () => {
      return initialState;
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

export const {
  setChosenDate,
  setDateData,
  resetChosenDate,
  resetErrorMessage,
  resetRequestDateDataState,
} = requestDateDataSlice.actions;

export const requestDateDataReducer = requestDateDataSlice.reducer;
