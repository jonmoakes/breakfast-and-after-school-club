import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectPaymentResult } from "../../../store/handle-payment/handle-payment.selector";
import { clearWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetCardInputState } from "../../../store/card-input-result/card-input-result.slice";

import {
  addFundsRoute,
  errorSubmittingPaymentMessage,
} from "../../../strings/strings";
import { resetAllHandlePaymentState } from "../../../store/handle-payment/handle-payment.slice";

const useHandlePaymentSucceeded = () => {
  const { fireSwal } = useFireSwal();

  const paymentResult = useSelector(selectPaymentResult);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(paymentResult).length || !paymentResult.error) return;

    fireSwal(
      "error",
      errorSubmittingPaymentMessage,
      `error received: ${paymentResult.error.message}`,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetAllHandlePaymentState());
        dispatch(resetCardInputState());
        dispatch(clearWalletFundsToAdd());
        navigate(addFundsRoute);
      }
    });
  }, [paymentResult, fireSwal, dispatch, navigate]);
};

export default useHandlePaymentSucceeded;
