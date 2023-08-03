import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestDateDataAsync } from "../../../store/request-date-data/request-date-data.slice";
import { selectChosenDate } from "../../../store/request-date-data/request-date-data.selector";

const useRequestDateData = () => {
  const chosenDate = useSelector(selectChosenDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chosenDate) return;
    dispatch(requestDateDataAsync({ chosenDate }));
  }, [dispatch, chosenDate]);
};

export default useRequestDateData;
