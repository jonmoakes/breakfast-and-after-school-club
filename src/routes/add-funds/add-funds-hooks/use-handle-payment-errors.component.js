import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { stopPaymentIsProcessing } from "../../../store/card-input-result/card-input-result.slice";
import { clearWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

import { errorSubmittingPaymentMessage } from "../../../strings/strings";

const useHandlePaymentErrors = () => {
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  const handlePaymentResultError = (paymentResult, cardElement) => {
    dispatch(stopPaymentIsProcessing());
    dispatch(clearWalletFundsToAdd());
    fireSwal(
      "error",
      errorSubmittingPaymentMessage,
      `${paymentResult.error.message}`,
      0,
      true,
      false
    );
    cardElement.clear();
  };

  const handleCatchError = (error) => {
    dispatch(stopPaymentIsProcessing());
    dispatch(clearWalletFundsToAdd());
    fireSwal(
      "error",
      errorSubmittingPaymentMessage,
      `the error received was: ${error.message}`,
      0,
      true,
      false
    );
  };

  return { handlePaymentResultError, handleCatchError };
};

export default useHandlePaymentErrors;
