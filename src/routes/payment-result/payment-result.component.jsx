import useGetPaymentResultStatus from "./payment-result-hooks/use-get-payment-result-status";
import useGetHandlePaymentSelectors from "../../hooks/get-selectors/use-get-handle-payment-selectors";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const PaymentResult = () => {
  useGetPaymentResultStatus();
  const { handlePaymentIsLoading } = useGetHandlePaymentSelectors();

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
