import { useState, useEffect } from "react";
import { format } from "date-fns";

const useGetDateAndTime = () => {
  const [currentDateAndTime, setCurrentDateAndTime] = useState(new Date());

  const morningCloseTime = new Date();
  morningCloseTime.setHours(12, 25, 0);

  const afternoonCloseTime = new Date();
  afternoonCloseTime.setHours(15, 25, 0);

  const formattedTodaysDate = format(
    new Date(currentDateAndTime),
    "yyyy-MM-dd"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateAndTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return {
    currentDateAndTime,
    formattedTodaysDate,
    morningCloseTime,
    afternoonCloseTime,
  };
};

export default useGetDateAndTime;
