import { useDispatch } from "react-redux";

import { setChosenDate } from "../../store/request-date-data/request-date-data.slice";

const useRequestDateDataActions = () => {
  const dispatch = useDispatch();

  const dispatchSetChosenDate = (event) => {
    dispatch(setChosenDate(event.target.value));
  };

  return { dispatchSetChosenDate };
};

export default useRequestDateDataActions;
