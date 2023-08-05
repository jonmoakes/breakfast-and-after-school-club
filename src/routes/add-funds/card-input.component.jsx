import { useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";

import useHandleCardInputChange from "./add-funds-hooks/use-handle-card-input-change";
import useIsOnline from "../../hooks/use-is-online";

import { selectWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import NetworkError from "../../components/errors/network-error.component";
import CardInputErrors from "./card-input-errors.component";

import AddFundsButton from "./add-funds-button.component";
import { CardInputDiv, ParentDiv } from "../../styles/div/div.styles";

import { options } from "./card-input-styles";

const CardInput = () => {
  const { isOnline } = useIsOnline();
  const { handleCardInputChange } = useHandleCardInputChange();

  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : isOnline && walletFundsToAdd ? (
        <>
          <CardInputErrors />
          <ParentDiv>
            <CardInputDiv>
              <CardElement {...{ options }} onChange={handleCardInputChange} />
              <AddFundsButton />
            </CardInputDiv>
          </ParentDiv>
        </>
      ) : null}
    </>
  );
};

export default CardInput;
