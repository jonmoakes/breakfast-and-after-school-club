import { createSlice } from "@reduxjs/toolkit";

const defaultUpdatePasswordFields = {
  updatePasswordNewPassword: "",
  updatePasswordConfirmNewPassword: "",
};
const INITIAL_STATE = {
  updatePasswordDetails: defaultUpdatePasswordFields,
};

export const updatePasswordSlice = createSlice({
  name: "updatePassword",
  initialState: INITIAL_STATE,
  reducers: {
    setNewPasswordDetails(state, action) {
      state.updatePasswordDetails = action.payload;
    },
    clearNewPasswordDetails(state) {
      state.updatePasswordDetails = defaultUpdatePasswordFields;
    },
  },
});

export const { setNewPasswordDetails, clearNewPasswordDetails } =
  updatePasswordSlice.actions;

export const updatePasswordReducer = updatePasswordSlice.reducer;
