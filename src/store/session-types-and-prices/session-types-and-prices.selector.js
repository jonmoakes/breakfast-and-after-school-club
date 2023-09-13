import { createSelector } from "reselect";

const selectSessionTypesAndPricesReducer = (state) =>
  state.sessionTypesAndPrices;

export const selectGetPricesIsLoading = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) => sessionTypesAndPricesSlice.isLoading
);

export const selectGetPricesError = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) => sessionTypesAndPricesSlice.error
);

export const selectMorningSessionType = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices?.morningSession
      ?.sessionType ?? ""
);

export const selectMorningSessionPrice = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices?.morningSession?.price ??
    null
);

export const selectAfternoonShortSessionType = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices?.afternoonShortSession
      ?.sessionType ?? ""
);

export const selectAfternoonShortSessionPrice = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices?.afternoonShortSession
      ?.price ?? null
);

export const selectAfternoonLongSessionType = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices?.afternoonLongSession
      ?.sessionType ?? ""
);

export const selectAfternoonLongSessionPrice = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices?.afternoonLongSession
      ?.price ?? null
);

export const selectMorningAndAfternoonShortSessionType = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices
      ?.morningAndAfternoonShortSession?.sessionType ?? ""
);

export const selectMorningAndAfternoonShortSessionPrice = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices
      ?.morningAndAfternoonShortSession?.price ?? null
);

export const selectMorningAndAfternoonLongSessionType = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices
      ?.morningAndAfternoonLongSession?.sessionType ?? ""
);

export const selectMorningAndAfternoonLongSessionPrice = createSelector(
  [selectSessionTypesAndPricesReducer],
  (sessionTypesAndPricesSlice) =>
    sessionTypesAndPricesSlice?.sessionTypesAndPrices
      ?.morningAndAfternoonLongSession?.price ?? null
);
