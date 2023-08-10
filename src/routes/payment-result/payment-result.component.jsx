import { useSelector } from "react-redux";

import useHandlePaymentSucceeded from "./payment-result-hooks/use-handle-payment-succeeded";
import useHandlePaymentFailed from "./payment-result-hooks/use-handle-payment-failed";
import useGetUploadResult from "./payment-result-hooks/use-get-upload-result";

import { selectHandlePaymentIsLoading } from "../../store/handle-payment/handle-payment.selector";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import { ParentDiv } from "../../styles/div/div.styles";

const PaymentResult = () => {
  useHandlePaymentSucceeded();
  useHandlePaymentFailed();
  useGetUploadResult();

  const isLoading = useSelector(selectHandlePaymentIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>payment result</BlackTitle>
      </ParentDiv>
    </Container>
  );
};

export default PaymentResult;
