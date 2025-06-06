import { useDispatch } from "react-redux";

import {
  resetRequestDataDataError,
  resetRequestDateDataState,
  setChosenDate,
  setDateData,
} from "../../../store/request-date-data/request-date-data.slice";

const useRequestDateDataActions = () => {
  const dispatch = useDispatch();

  const dispatchSetChosenDate = (event) => {
    dispatch(setChosenDate(event.target.value));
  };

  const dispatchListenerSetDateData = (updatedDateData) => {
    dispatch(setDateData(updatedDateData));
  };

  const dispatchResetRequestDateDataError = () => {
    dispatch(resetRequestDataDataError());
  };

  const dispatchResetRequestDateDataState = () => {
    dispatch(resetRequestDateDataState());
  };

  return {
    dispatchSetChosenDate,
    dispatchListenerSetDateData,
    dispatchResetRequestDateDataError,
    dispatchResetRequestDateDataState,
  };
};

export default useRequestDateDataActions;
