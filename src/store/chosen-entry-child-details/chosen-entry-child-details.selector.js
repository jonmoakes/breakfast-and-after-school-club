import { createSelector } from "reselect";

const selectChosenEntryChildDetailsReducer = (state) =>
  state.chosenEntryChildDetails;

export const selectIsLoading = createSelector(
  [selectChosenEntryChildDetailsReducer],
  (chosenEntryChildDetailsSlice) => chosenEntryChildDetailsSlice.isLoading
);

export const selectChosenEntryChildDetails = createSelector(
  [selectChosenEntryChildDetailsReducer],
  (chosenEntryChildDetailsSlice) =>
    chosenEntryChildDetailsSlice.chosenEntryChildDetails || []
);

export const selectResult = createSelector(
  [selectChosenEntryChildDetailsReducer],
  (chosenEntryChildDetailsSlice) => chosenEntryChildDetailsSlice.result
);

export const selectError = createSelector(
  [selectChosenEntryChildDetailsReducer],
  (chosenEntryChildDetailsSlice) => chosenEntryChildDetailsSlice.error
);
