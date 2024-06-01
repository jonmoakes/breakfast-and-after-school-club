import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorSubmittingPaymentMessage } from "../../../strings/errors/errors-strings";
import { addFundsRoute } from "../../../strings/routes/routes-strings";

const useHandlePaymentFailed = () => {
  const { paymentResultObject } = useGetHandlePaymentSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const handlePaymentFailed = () => {
    const error = paymentResultObject.error.message;
    fireSwal(
      "error",
      errorSubmittingPaymentMessage(error),
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(addFundsRoute);
      }
    });
  };

  return { handlePaymentFailed };
};

export default useHandlePaymentFailed;
