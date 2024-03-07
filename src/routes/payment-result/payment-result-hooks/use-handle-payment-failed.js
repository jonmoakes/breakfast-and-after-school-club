import { useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";

import { errorSubmittingPaymentMessage } from "../../../strings/errors/errors-strings";
import { accountRoute } from "../../../strings/routes/routes-strings";

const useHandlePaymentSucceeded = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { paymentResult } = useSelector(selectHandlePaymentSelectors);

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
