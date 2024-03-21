import { useDispatch } from "react-redux";

import {
  resetCardInputResultState,
  setCardInputResult,
} from "../../store/card-input-result/card-input-result.slice";

const useCardInputResultActions = () => {
  const dispatch = useDispatch();

  const dispatchSetCardInputResult = (resultObject) => {
    dispatch(setCardInputResult(resultObject));
  };

  const dispatchResetCardInputResultState = () => {
    dispatch(resetCardInputResultState());
  };

  return { dispatchSetCardInputResult, dispatchResetCardInputResultState };
};

export default useCardInputResultActions;
