import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorSubmittingPaymentMessage } from "../../../strings/errors/errors-strings";
import { accountRoute } from "../../../strings/routes/routes-strings";

const useHandlePaymentSucceeded = () => {
  const { paymentResultObject } = useGetHandlePaymentSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const handlePaymentFailed = () => {
    fireSwal(
      "error",
      errorSubmittingPaymentMessage,
      `error received: ${paymentResultObject.error.message}`,
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
