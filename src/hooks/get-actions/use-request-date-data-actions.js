import { useDispatch } from "react-redux";

import {
  setChosenDate,
  setDateData,
} from "../../store/request-date-data/request-date-data.slice";

const useRequestDateDataActions = () => {
  const dispatch = useDispatch();

  const dispatchSetChosenDate = (event) => {
    dispatch(setChosenDate(event.target.value));
  };

  const dispatchSetDateData = (updatedDateData) => {
    dispatch(setDateData(updatedDateData));
  };

  return { dispatchSetChosenDate, dispatchSetDateData };
};

export default useRequestDateDataActions;
