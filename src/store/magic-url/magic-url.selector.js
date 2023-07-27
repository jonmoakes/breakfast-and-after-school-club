import { createSelector } from "reselect";

const selectMagicUrlReducer = (state) => state.magicUrl;

export const selectMagicUrlEmail = createSelector(
  [selectMagicUrlReducer],
  (magicUrlSlice) => magicUrlSlice.magicUrlEmail
);

export const selectMagicUrlResultError = createSelector(
  [selectMagicUrlReducer],
  (magicUrlSlice) => magicUrlSlice.magicUrlResultError
);
