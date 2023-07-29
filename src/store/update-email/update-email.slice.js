import { createSlice } from "@reduxjs/toolkit";

const defaultUpdateEmailDetails = {
  newEmail: "",
  password: "",
};
const INITIAL_STATE = {
  updateEmailDetails: defaultUpdateEmailDetails,
};

export const updateEmailSlice = createSlice({
  name: "updateEmail",
  initialState: INITIAL_STATE,
  reducers: {
    setUpdateEmailDetails(state, action) {
      state.updateEmailDetails = action.payload;
    },
    resetUpdateEmailFields(state) {
      state.updateEmailDetails = defaultUpdateEmailDetails;
    },
  },
});

export const { setUpdateEmailDetails, resetUpdateEmailFields } =
  updateEmailSlice.actions;

export const updateEmailReducer = updateEmailSlice.reducer;
