import { useEffect } from "react";

import useCurrentDateAndTimeActions from "./get-actions-and-thunks/use-current-date-and-time-actions";

const useSetDateAndTime = (milliseconds) => {
  const { dispatchSetCurrentDateAndTime } = useCurrentDateAndTimeActions();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatchSetCurrentDateAndTime();
    }, milliseconds);

    return () => clearInterval(interval);
  }, [dispatchSetCurrentDateAndTime, milliseconds]);
};

export default useSetDateAndTime;
