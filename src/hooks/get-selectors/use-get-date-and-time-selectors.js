import { useSelector } from "react-redux";

import { selectCurrentDateAndTimeSelectors } from "../../store/date-and-time/date-and-time.slice";

const useGetCurrentDateAndTimeSelectors = () => {
  const { currentDateAndTime } = useSelector(selectCurrentDateAndTimeSelectors);

  return { currentDateAndTime };
};

export default useGetCurrentDateAndTimeSelectors;
