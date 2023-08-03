import { useDispatch } from "react-redux";

import { setChosenDate } from "../../../store/request-date-data/request-date-data.slice";

const useChooseDateHandleChange = () => {
  const dispatch = useDispatch();

  const chooseDateHandleChange = (event) => {
    dispatch(setChosenDate(event.target.value));
  };

  return { chooseDateHandleChange };
};

export default useChooseDateHandleChange;
