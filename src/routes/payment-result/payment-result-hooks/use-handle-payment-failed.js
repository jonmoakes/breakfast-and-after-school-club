import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectPaymentResult } from "../../../store/handle-payment/handle-payment.selector";

import {
  addFundsRoute,
  errorSubmittingPaymentMessage,
} from "../../../strings/strings";

const useHandlePaymentSucceeded = () => {
  const { fireSwal } = useFireSwal();

  const paymentResult = useSelector(selectPaymentResult);
  const navigate = useNavigate();

  const handlePaymentFailed = () => {
    fireSwal(
      "error",
      errorSubmittingPaymentMessage,
      `error received: ${paymentResult.error.message}`,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        navigate(addFundsRoute);
      }
    });
  };

  return { handlePaymentFailed };
};

export default useHandlePaymentSucceeded;
