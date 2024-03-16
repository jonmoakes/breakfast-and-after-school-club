import { useDispatch } from "react-redux";

import { setCurrentDateAndTime } from "../../store/date-and-time/date-and-time.slice";

const useCurrentDateAndTimeActions = () => {
  const dispatch = useDispatch();

  const dispatchSetCurrentDateAndTime = () => {
    dispatch(setCurrentDateAndTime(new Date()));
  };

  return { dispatchSetCurrentDateAndTime };
};

export default useCurrentDateAndTimeActions;
