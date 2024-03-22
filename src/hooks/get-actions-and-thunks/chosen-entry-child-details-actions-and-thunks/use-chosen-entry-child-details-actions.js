import { useDispatch } from "react-redux";

import {
  resetChosenEntryChildDetailsError,
  resetChosenEntryChildDetailsState,
} from "../../../store/chosen-entry-child-details/chosen-entry-child-details.slice";

const useChosenEntryChildDetailsActions = () => {
  const dispatch = useDispatch();

  const dispatchResetChosenEntryChildDetailsError = () => {
    dispatch(resetChosenEntryChildDetailsError());
  };

  const dispatchResetChosenEntryChildDetailsState = () => {
    dispatch(resetChosenEntryChildDetailsState());
  };

  return {
    dispatchResetChosenEntryChildDetailsError,
    dispatchResetChosenEntryChildDetailsState,
  };
};

export default useChosenEntryChildDetailsActions;
