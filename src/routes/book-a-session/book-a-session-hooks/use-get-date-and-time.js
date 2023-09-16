import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import { selectCurrentDateAndTime } from "../../../store/date-and-time/date-and-time.selector";
import { setCurrentDateAndTime } from "../../../store/date-and-time/date-and-time.slice";

const useGetDateAndTime = () => {
  const currentDateAndTime = useSelector(selectCurrentDateAndTime);
  const dispatch = useDispatch();

  const morningCloseTime = new Date();
  morningCloseTime.setHours(12, 25, 0);

  const afternoonCloseTime = new Date();
  afternoonCloseTime.setHours(15, 25, 0);

  const formattedTodaysDate = format(
    new Date(currentDateAndTime),
    "yyyy-MM-dd"
  );

  console.log(formattedTodaysDate);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCurrentDateAndTime(new Date()));
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return {
    currentDateAndTime,
    formattedTodaysDate,
    morningCloseTime,
    afternoonCloseTime,
  };
};

export default useGetDateAndTime;
