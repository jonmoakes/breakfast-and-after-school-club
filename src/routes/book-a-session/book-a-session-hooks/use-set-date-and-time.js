import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCurrentDateAndTime } from "../../../store/date-and-time/date-and-time.slice";

const useSetDateAndTime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCurrentDateAndTime(new Date()));
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatch]);
};

export default useSetDateAndTime;
