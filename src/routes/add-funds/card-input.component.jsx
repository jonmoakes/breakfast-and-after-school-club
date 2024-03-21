import { useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";

import useHandleCardInputChange from "./add-funds-hooks/use-handle-card-input-change";
import useIsOnline from "../../hooks/use-is-online";

import { selectWalletFundsToAddSelectors } from "../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { selectHandlePaymentSelectors } from "../../store/handle-payment/handle-payment.slice";

import NetworkError from "../../components/errors/network-error.component";
import CardInputErrors from "./errors-help-redirect/card-input-errors.component";
import AddFundsButton from "./add-funds-button.component";
import StripeLogo from "./stripe-logo.component";

import { CardInputDiv, ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { options } from "./card-input-styles/card-input-styles";

const CardInput = () => {
  const { isOnline } = useIsOnline();
  const { handleCardInputChange } = useHandleCardInputChange();

  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);
  const { handlePaymentError } = useSelector(selectHandlePaymentSelectors);

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : handlePaymentError ? null : isOnline && walletFundsToAdd ? (
        <>
          <CardInputErrors />
          <ParentDiv>
            <Text>please enter your card details</Text>
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
