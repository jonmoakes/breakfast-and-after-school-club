import { useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";

import useHandleCardInputChange from "./card-input-hooks/use-handle-card-input-change";
import useIsOnline from "../../../hooks/use-is-online";
import useHandlePayment from "./card-input-hooks/use-handle-payment";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import Loader from "../../../components/loader/loader.component";
import CardInputErrors from "./card-input-errors.component";
import NetworkError from "../../../components/errors/network-error.component";

import { CardInputDiv, ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { options } from "./card-input-style-options";

import {
  confirmAddFundsMessage,
  addFundsMessage,
} from "../../../strings/strings";

const CardInput = () => {
  const { isOnline } = useIsOnline();
  const { handleCardInputChange, showPayNowButton, hidePayNowButton } =
    useHandleCardInputChange();
  const { confirmSwal } = useConfirmSwal();
  const { handlePayment } = useHandlePayment();

  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  const confirmResult = () => {
    handlePayment();
  };

  const confirmPayment = () => {
    confirmSwal(
      confirmAddFundsMessage(walletFundsToAdd),
      "",
      addFundsMessage,
      confirmResult
    );
  };

  return (
    <>
      {isOnline && walletFundsToAdd ? (
        <>
          <CardInputErrors />

          <ParentDiv>
            <CardInputDiv>
              <CardElement {...{ options }} onChange={handleCardInputChange} />

              {showPayNowButton() ? (
                <YellowGreenButton
                  className="add-funds"
                  type="button"
                  onClick={confirmPayment}
                >
                  add funds!
                </YellowGreenButton>
              ) : (
                hidePayNowButton() && (
                  <>
                    <Loader />
                    <YellowGreenButton className="disabled">
                      please wait....
                    </YellowGreenButton>
                  </>
                )
              )}
            </CardInputDiv>
          </ParentDiv>
        </>
      ) : !isOnline ? (
        <NetworkError />
      ) : null}
    </>
  );
};

export default CardInput;
