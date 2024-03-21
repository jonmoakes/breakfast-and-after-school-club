import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";

import { PaymentErrorDiv, WarningDiv } from "../../../styles/div/div.styles";
import { Text, WhiteText } from "../../../styles/p/p.styles";

const CardInputErrors = () => {
  const { warning, error } = useGetCardInputResultSelectors();

  return (
    <>
      {warning ? (
        <WarningDiv>
          <Text>{warning}</Text>
        </WarningDiv>
      ) : (
        error && (
          <PaymentErrorDiv>
            <WhiteText>{error}</WhiteText>
          </PaymentErrorDiv>
        )
      )}
    </>
  );
};

export default CardInputErrors;
