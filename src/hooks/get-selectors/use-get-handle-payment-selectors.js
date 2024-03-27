import { useSelector } from "react-redux";

import { selectHandlePaymentSelectors } from "../../store/handle-payment/handle-payment.slice";

const useGetHandlePaymentSelectors = () => {
  const {
    handlePaymentIsLoading,
    client_secret,
    handlePaymentError,
    userHasConfirmedPayment,
    paymentResultObject,
    showConfirmButton,
  } = useSelector(selectHandlePaymentSelectors);

  return {
    handlePaymentIsLoading,
    client_secret,
    handlePaymentError,
    userHasConfirmedPayment,
    paymentResultObject,
    showConfirmButton,
  };
};

export default useGetHandlePaymentSelectors;
