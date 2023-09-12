import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  sessionTypesAndPrices: {},
};

export const sessionTypesAndPricesSlice = createSlice({
  name: "sessionTypesAndPrices",
  initialState: INITIAL_STATE,
  reducers: {
    setSessionTypesAndPrices(state, action) {
      state.sessionTypesAndPrices = action.payload;
    },
  },
});

export const { setSessionTypesAndPrices } = sessionTypesAndPricesSlice.actions;

export const sessionTypesAndPricesReducer = sessionTypesAndPricesSlice.reducer;
