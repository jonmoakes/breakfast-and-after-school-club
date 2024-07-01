import { useDispatch } from "react-redux";

import {
  resetIncomeData,
  resetIncomeDataError,
  resetIncomeDataState,
} from "../../../store/income-data/income-data.slice";

const useIncomeDataActions = () => {
  const dispatch = useDispatch();

  const dispatchResetIncomeData = (event) => {
    dispatch(resetIncomeData());
  };

  const dispatchResetIncomeDataError = (event) => {
    dispatch(resetIncomeDataError());
  };

  const dispatchResetIncomeDataState = (event) => {
    dispatch(resetIncomeDataState());
  };

  return {
    dispatchResetIncomeData,
    dispatchResetIncomeDataError,
    dispatchResetIncomeDataState,
  };
};

export default useIncomeDataActions;
