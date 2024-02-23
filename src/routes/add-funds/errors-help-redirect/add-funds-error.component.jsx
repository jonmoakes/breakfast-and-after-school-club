import { useSelector, useDispatch } from "react-redux";

import {
  selectHandlePaymentSelectors,
  resetPreResultHandlePaymentState,
} from "../../../store/handle-payment/handle-payment.slice";
import { resetWalletFundsToAddState } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetCardInputState } from "../../../store/card-input-result/card-input-result.slice";

import { ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";

const AddFundsError = () => {
  const { handlePaymentError } = useSelector(selectHandlePaymentSelectors);
  const dispatch = useDispatch();

  const clearErrorAndResetFundsToAdd = () => {
    dispatch(resetPreResultHandlePaymentState());
    dispatch(resetWalletFundsToAddState());
    dispatch(resetCardInputState());
  };

  return (
    <>
      {handlePaymentError ? (
        <ParentDiv>
          <Text>
            sorry, there was an error on our end. the error received was:
            <br />
            {handlePaymentError}
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
