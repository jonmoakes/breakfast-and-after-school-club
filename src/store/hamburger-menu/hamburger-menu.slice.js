import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  showHamburgerMenu: false,
};

export const hamburgerMenuSlice = createSlice({
  name: "hamburgerMenu",
  initialState: INITIAL_STATE,
  reducers: {
    hideHamburgerMenu(state, action) {
      state.showHamburgerMenu = action.payload;
    },
    toggleHamburgerMenu(state, action) {
      state.showHamburgerMenu = action.payload;
    },
  },
  selectors: {
    selectShowHamburgerMenu: (state) => state.showHamburgerMenu,
  },
});

export const { hideHamburgerMenu, toggleHamburgerMenu } =
  hamburgerMenuSlice.actions;
export const { selectShowHamburgerMenu } = hamburgerMenuSlice.selectors;

export const hamburgerMenuReducer = hamburgerMenuSlice.reducer;
