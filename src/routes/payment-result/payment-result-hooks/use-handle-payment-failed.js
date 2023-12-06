import { useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { selectPaymentResult } from "../../../store/handle-payment/handle-payment.selector";

import {
  accountRoute,
  errorSubmittingPaymentMessage,
} from "../../../strings/strings";

const useHandlePaymentSucceeded = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const paymentResult = useSelector(selectPaymentResult);

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
        hamburgerHandlerNavigate(accountRoute);
      }
    });
  };

  return { handlePaymentFailed };
};

export default useHandlePaymentSucceeded;
