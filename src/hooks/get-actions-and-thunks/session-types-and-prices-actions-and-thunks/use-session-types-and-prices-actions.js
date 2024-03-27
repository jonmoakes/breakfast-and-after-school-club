import { useDispatch } from "react-redux";

import {
  resetSessionPricesError,
  resetSessionTypesAndPricesState,
} from "../../../store/session-types-and-prices/session-types-and-prices.slice";

const useSessionTypesAndPricesActions = () => {
  const dispatch = useDispatch();

  const dispatchResetSessionPricesError = () => {
    dispatch(resetSessionPricesError());
  };

  const dispatchResetSessionTypesAndPricesState = () => {
    dispatch(resetSessionTypesAndPricesState());
  };

  return {
    dispatchResetSessionPricesError,
    dispatchResetSessionTypesAndPricesState,
  };
};

export default useSessionTypesAndPricesActions;
