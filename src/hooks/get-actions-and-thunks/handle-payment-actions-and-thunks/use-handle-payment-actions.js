import { useDispatch } from "react-redux";

import {
  resetAllHandlePaymentState,
  resetClientSecret,
  resetPreResultHandlePaymentState,
} from "../../../store/handle-payment/handle-payment.slice";

const useHandlePaymentActions = () => {
  const dispatch = useDispatch();

  const dispatchResetClientSecret = () => {
    dispatch(resetClientSecret());
  };

  const dispatchResetPreResultHandlePaymentState = () => {
    dispatch(resetPreResultHandlePaymentState());
  };

  const dispatchResetAllHandlePaymentState = () => {
    dispatch(resetAllHandlePaymentState());
  };

  return {
    dispatchResetClientSecret,
    dispatchResetPreResultHandlePaymentState,
    dispatchResetAllHandlePaymentState,
  };
};

export default useHandlePaymentActions;
