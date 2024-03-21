import { useDispatch } from "react-redux";

import {
  resetDateAndTimeState,
  setCurrentDateAndTime,
} from "../../store/date-and-time/date-and-time.slice";

const useCurrentDateAndTimeActions = () => {
  const dispatch = useDispatch();

  const dispatchSetCurrentDateAndTime = () => {
    dispatch(setCurrentDateAndTime(new Date()));
  };

  const dispatchResetCurrentDateAndTimeState = () => {
    dispatch(resetDateAndTimeState());
  };

  return {
    dispatchSetCurrentDateAndTime,
    dispatchResetCurrentDateAndTimeState,
  };
};

export default useCurrentDateAndTimeActions;
