import { createSelector } from "reselect";

const selectSessionTypesAndPricesReducer = (state) =>
  state.sessionTypesAndPrices;

export const selectMorningSession = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) => sessionTypesAndPricesSlice.morningSession
);

export const selectAfternoonShortSession = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice.afternoonShortSession
);

export const selectAfternoonLongSession = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice.afternoonLongSession
);

export const selectMorningAndAfternoonShortSession = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice.morningAndAfternoonShortSession
);

export const selectMorningAndAfternoonLongSession = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice.morningAndAfternoonLongSession
);
