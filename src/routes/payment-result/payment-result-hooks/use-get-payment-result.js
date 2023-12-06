import { useEffect } from "react";
import { useSelector } from "react-redux";

import useUpdateWalletBalance from "./use-update-wallet-balance";
import useHandlePaymentFailed from "../payment-result-hooks/use-handle-payment-failed";

import {
  selectPaymentResult,
  selectWalletFundsAddedResult,
} from "../../../store/handle-payment/handle-payment.selector";

const useGetPaymentResult = () => {
  const { updateWalletBalance } = useUpdateWalletBalance();
  const { handlePaymentFailed } = useHandlePaymentFailed();

  const paymentResult = useSelector(selectPaymentResult);
  const walletFundsAddedResult = useSelector(selectWalletFundsAddedResult);

  const paymentResultStatus =
    paymentResult?.paymentIntent?.status === undefined
      ? "undefined"
      : paymentResult.paymentIntent.status;

  useEffect(() => {
    if (!Object.keys(paymentResult).length || paymentResult === "completed")
      return;

    if (paymentResultStatus === "succeeded") {
      updateWalletBalance();
    } else {
      handlePaymentFailed();
    }
  }, [
    paymentResult,
    paymentResultStatus,
    updateWalletBalance,
    handlePaymentFailed,
    walletFundsAddedResult,
  ]);
};

export default useGetPaymentResult;
