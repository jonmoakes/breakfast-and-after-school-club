import { createSelector } from "reselect";

const selectHamburgerMenuReducer = (state) => state.hamburgerMenu;

export const selectShowHamburgerMenu = createSelector(
  [selectHamburgerMenuReducer],
  (hamburgerMenuSlice) => hamburgerMenuSlice.showHamburgerMenu
);
