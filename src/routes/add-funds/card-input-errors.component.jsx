import { useSelector } from "react-redux";

import { selectCardInputResult } from "../../store/card-input-result/card-input-result.selector";

import { PaymentErrorDiv, WarningDiv } from "../../styles/div/div.styles";

import { Text, WhiteText } from "../../styles/p/p.styles";

const CardInputErrors = () => {
  const cardInputResult = useSelector(selectCardInputResult);

  const { warning, error } = cardInputResult;

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
