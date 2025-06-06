import { Navigate } from "react-router-dom";

import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";

import Loader from "../../../components/loader/loader.component";

import { paymentResultRoute } from "../../../strings/routes/routes-strings";

const RedirectAndLoader = () => {
  const { handlePaymentIsLoading, paymentResultObject } =
    useGetHandlePaymentSelectors();

  return (
    <>
      {Object.keys(paymentResultObject).length ? (
        <Navigate replace to={paymentResultRoute} />
      ) : null}
      {handlePaymentIsLoading ? <Loader /> : null}
    </>
  );
};

export default RedirectAndLoader;
