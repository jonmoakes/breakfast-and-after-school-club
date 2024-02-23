import { useSelector } from "react-redux";

import useGetPaymentResult from "./payment-result-hooks/use-get-payment-result";

import { selectHandlePaymentSelectors } from "../../store/handle-payment/handle-payment.slice";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const PaymentResult = () => {
  useGetPaymentResult();

  const { handlePaymentIsLoading } = useSelector(selectHandlePaymentSelectors);

  return (
    <Container>
      {handlePaymentIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>payment result</BlackTitle>
      </ParentDiv>
    </Container>
  );
};

export default PaymentResult;
