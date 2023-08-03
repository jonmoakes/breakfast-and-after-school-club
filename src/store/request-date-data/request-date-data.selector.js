import { createSelector } from "reselect";

const selectRequestDateDataReducer = (state) => state.requestDateData;

export const selectChosenDate = createSelector(
  [selectRequestDateDataReducer],
  (requestDateDataSlice) => requestDateDataSlice.requestDateData.chosenDate
);

export const selectRequestDateDataIsLoading = createSelector(
  [selectRequestDateDataReducer],
  (requestDateDataSlice) => requestDateDataSlice.requestDateData.isLoading
);

export const selectRequestDateData = createSelector(
  [selectRequestDateDataReducer],
  (requestDateDataSlice) => requestDateDataSlice.requestDateData.dateData
);

export const selectRequestDateDataErrorMessage = createSelector(
  [selectRequestDateDataReducer],
  (requestDateDataSlice) => requestDateDataSlice.requestDateData.error
);
