import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getAllChildrenAsync } from "./get-all-children.thunks";

const INITIAL_STATE = {
  getAllChildrenIsLoading: false,
  allChildren: [],
  getAllChildrenError: null,
};

export const getAllChildrenSlice = createSlice({
  name: "getAllChildren",
  initialState: INITIAL_STATE,
  reducers: {
    setAllChildren(state, action) {
      state.allChildren = action.payload;
    },
    resetGetAllChildrenError(state) {
      state.getAllChildrenError = null;
    },
    resetGetAllChildrenState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectGetAllChildrenSelectors: createSelector(
      (state) => state.getAllChildrenIsLoading,
      (state) => state.allChildren,
      (state) => state.getAllChildrenError,
      (getAllChildrenIsLoading, allChildren, getAllChildrenError) => {
        return {
          getAllChildrenIsLoading,
          allChildren,
          getAllChildrenError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllChildrenAsync.pending, (state) => {
        state.getAllChildrenIsLoading = true;
      })
      .addCase(getAllChildrenAsync.fulfilled, (state, action) => {
        state.getAllChildrenIsLoading = false;
        state.allChildren = action.payload;
        state.getAllChildrenError = null;
      })
      .addCase(getAllChildrenAsync.rejected, (state, action) => {
        state.getAllChildrenIsLoading = false;
        state.allChildren = [];
        state.getAllChildrenError = action.payload;
      });
  },
});

export const {
  resetGetAllChildrenError,
  resetGetAllChildrenState,
  setAllChildren,
} = getAllChildrenSlice.actions;
export const { selectGetAllChildrenSelectors } = getAllChildrenSlice.selectors;

export const getAllChildrenReducer = getAllChildrenSlice.reducer;
