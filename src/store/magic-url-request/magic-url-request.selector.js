import { createSelector } from "reselect";

const selectMagicUrlRequestReducer = (state) => state.magicUrlRequest;

export const selectMagicUrlRequestIsLoading = createSelector(
  [selectMagicUrlRequestReducer],
  (magicUrlRequestSlice) => magicUrlRequestSlice.isLoading
);

export const selectMagicUrlRequestEmail = createSelector(
  [selectMagicUrlRequestReducer],
  (magicUrlRequestSlice) => magicUrlRequestSlice.magicUrlRequestEmail
);

export const selectMagicUrlRequestResult = createSelector(
  [selectMagicUrlRequestReducer],
  (magicUrlRequestSlice) => magicUrlRequestSlice.requestResult
);

export const selectMagicUrlRequestError = createSelector(
  [selectMagicUrlRequestReducer],
  (magicUrlRequestSlice) => magicUrlRequestSlice.error
);
