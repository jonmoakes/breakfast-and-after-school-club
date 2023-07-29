import { useDispatch, useSelector } from "react-redux";

import { setCardInputResult } from "../../../store/card-input-result/card-input-result.slice";
import {
  selectCardInputResult,
  selectPaymentIsProcessing,
} from "../../../store/card-input-result/card-input-result.selector";

import { formNotCompleteWarning } from "../../../strings/strings";

const useHandleCardInputChange = () => {
  const paymentIsProcessing = useSelector(selectPaymentIsProcessing);
  const cardInputResult = useSelector(selectCardInputResult);

  const { showButton } = cardInputResult;
  const dispatch = useDispatch();

  const handleCardInputChange = (e) => {
    if (!e.empty && e.error === undefined && e.complete === false) {
      dispatch(
        setCardInputResult({
          error: "",
          warning: formNotCompleteWarning,
          showButton: false,
        })
      );
    } else if (e.error !== undefined && e.complete === false) {
      dispatch(
        setCardInputResult({
          error: e.error.message,
          warning: "",
          showButton: false,
        })
      );
    } else if (!e.empty && e.error === undefined && e.complete === true) {
      dispatch(
        setCardInputResult({
          error: "",
          warning: "",
          showButton: true,
        })
      );
    }
  };

  const showPayNowButton = () => {
    return showButton && !paymentIsProcessing ? true : false;
  };

  const hidePayNowButton = () => {
    return showButton && paymentIsProcessing ? true : false;
  };

  return { handleCardInputChange, showPayNowButton, hidePayNowButton };
};

export default useHandleCardInputChange;
