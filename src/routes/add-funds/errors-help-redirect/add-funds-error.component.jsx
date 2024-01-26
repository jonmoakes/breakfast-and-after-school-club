import { useSelector, useDispatch } from "react-redux";

import { selectHandlePaymentError } from "../../../store/handle-payment/handle-payment.selector";
import { resetErrorMessage } from "../../../store/handle-payment/handle-payment.slice";
import { resetWalletFundsToAddState } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetCardInputState } from "../../../store/card-input-result/card-input-result.slice";

import { ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";

const AddFundsError = () => {
  const error = useSelector(selectHandlePaymentError);
  const dispatch = useDispatch();

  const clearErrorAndResetFundsToAdd = () => {
    dispatch(resetErrorMessage());
    dispatch(resetWalletFundsToAddState());
    dispatch(resetCardInputState());
  };

  return (
    <>
      {error ? (
        <ParentDiv>
          <Text>
            sorry, there was an error on our end. the error received was:
            <br />
            {error}
          </Text>
          <Text>
            please tap the button below and try again, or{" "}
            <StyledLink>contact us</StyledLink> quoting the error message if the
            problem persists.
          </Text>
          <YellowGreenButton onClick={clearErrorAndResetFundsToAdd}>
            ok
          </YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AddFundsError;
