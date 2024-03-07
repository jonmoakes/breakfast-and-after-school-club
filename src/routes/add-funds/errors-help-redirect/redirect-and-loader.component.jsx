import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";

import Loader from "../../../components/loader/loader.component";

import { paymentResultRoute } from "../../../strings/routes/routes-strings";

const RedirectAndLoader = () => {
  const { handlePaymentIsLoading, paymentResult } = useSelector(
    selectHandlePaymentSelectors
  );

  return (
    <>
      {Object.keys(paymentResult).length ? (
        <Navigate replace to={paymentResultRoute} />
      ) : null}
      {handlePaymentIsLoading ? <Loader /> : null}
    </>
  );
};

export default RedirectAndLoader;
