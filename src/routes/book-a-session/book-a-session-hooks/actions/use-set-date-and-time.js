import { useEffect } from "react";

import useCurrentDateAndTimeActions from "../../../../hooks//get-actions-and-thunks/use-current-date-and-time-actions";

const useSetDateAndTime = () => {
  const { dispatchSetCurrentDateAndTime } = useCurrentDateAndTimeActions();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatchSetCurrentDateAndTime();
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatchSetCurrentDateAndTime]);
};

export default useSetDateAndTime;
