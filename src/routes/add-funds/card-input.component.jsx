import { CardElement } from "@stripe/react-stripe-js";

import useGetHandlePaymentSelectors from "../../hooks/get-selectors/use-get-handle-payment-selectors";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useHandleCardInputChange from "./add-funds-hooks/use-handle-card-input-change";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";
import CardInputErrors from "./errors-help-redirect/card-input-errors.component";
import AddFundsButton from "./add-funds-button.component";
import StripeLogo from "./stripe-logo.component";

import { CardInputDiv, ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { options } from "./card-input-styles/card-input-styles";

const CardInput = () => {
  const { handlePaymentError } = useGetHandlePaymentSelectors();
  const { isOnline } = useIsOnline();
  const { handleCardInputChange } = useHandleCardInputChange();
  const { walletFundsToAdd } = useGetCurrentUserSelectors();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : handlePaymentError ? null : walletFundsToAdd ? (
        <>
          <CardInputErrors />
          <ParentDiv>
            <Text>
              you will be adding{" "}
              <RedSpan>£{walletFundsToAdd.toFixed(2)}</RedSpan>
            </Text>

            <Text>if this is correct, please enter your card details</Text>
            <CardInputDiv>
              <CardElement {...{ options }} onChange={handleCardInputChange} />
            </CardInputDiv>
            <AddFundsButton />
            <StripeLogo />
          </ParentDiv>
        </>
      ) : null}
    </>
  );
};

export default CardInput;
