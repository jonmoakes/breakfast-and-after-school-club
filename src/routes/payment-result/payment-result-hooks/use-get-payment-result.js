import { useEffect } from "react";
import { useSelector } from "react-redux";

import useHandlePaymentSucceeded from "../payment-result-hooks/use-handle-payment-succeeded";
import useHandlePaymentFailed from "../payment-result-hooks/use-handle-payment-failed";

import {
  selectPaymentResult,
  selectWalletFundsAddedResult,
} from "../../../store/handle-payment/handle-payment.selector";

const useGetPaymentResult = () => {
  const { handlePaymentSucceeded } = useHandlePaymentSucceeded();
  const { handlePaymentFailed } = useHandlePaymentFailed();

  const paymentResult = useSelector(selectPaymentResult);
  const walletFundsAddedResult = useSelector(selectWalletFundsAddedResult);

  const paymentResultStatus =
    paymentResult?.paymentIntent?.status === undefined
      ? "undefined"
      : paymentResult.paymentIntent.status;

  useEffect(() => {
    if (
      !Object.keys(paymentResult).length ||
      paymentResultStatus === "undefined"
    )
      return;

    if (paymentResultStatus === "succeeded") {
      handlePaymentSucceeded();
    } else {
      handlePaymentFailed();
    }
  }, [
    paymentResult,
    paymentResultStatus,
    handlePaymentSucceeded,
    handlePaymentFailed,
    walletFundsAddedResult,
  ]);
};

export default useGetPaymentResult;
