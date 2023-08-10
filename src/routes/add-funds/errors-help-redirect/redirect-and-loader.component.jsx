import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  selectHandlePaymentIsLoading,
  selectPaymentResult,
} from "../../../store/handle-payment/handle-payment.selector";

import Loader from "../../../components/loader/loader.component";

import { paymentResultRoute } from "../../../strings/strings";

const RedirectAndLoader = () => {
  const isLoading = useSelector(selectHandlePaymentIsLoading);
  const paymentResult = useSelector(selectPaymentResult);

  return (
    <>
      {Object.keys(paymentResult).length ? (
        <Navigate replace to={paymentResultRoute} />
      ) : null}
      {isLoading ? <Loader /> : null}
    </>
  );
};

export default RedirectAndLoader;
