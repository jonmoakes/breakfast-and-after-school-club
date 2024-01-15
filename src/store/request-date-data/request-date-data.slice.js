import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const requestDateDataAsync = createAsyncThunk(
  "requestDateData",
  async ({ databaseId, collectionId, chosenDate }, thunkAPI) => {
    try {
      const queryIndex = "date";
      const queryValue = chosenDate;

      const getChosenDateDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
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

    setDateData(state, action) {
      state.requestDateData.dateData = action.payload;
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
  resetErrorMessage,
  resetRequestDateDataState,
} = requestDateDataSlice.actions;

export const requestDateDataReducer = requestDateDataSlice.reducer;
