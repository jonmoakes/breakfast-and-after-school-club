import { useSelector } from "react-redux";

import { selectPaymentIsProcessing } from "../../store/card-input-result/card-input-result.selector";
import { selectWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCardInputResult } from "../../store/card-input-result/card-input-result.selector";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import useHandlePayment from "./add-funds-hooks/use-handle-payment";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { addFundsMessage, confirmAddFundsMessage } from "../../strings/strings";

const AddFundsButton = () => {
  const { handlePayment } = useHandlePayment();
  const { confirmSwal } = useConfirmSwal();

  const paymentIsProcessing = useSelector(selectPaymentIsProcessing);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const cardInputResult = useSelector(selectCardInputResult);

  const { showButton } = cardInputResult;

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
      {showButton && !paymentIsProcessing ? (
        <YellowGreenButton
          className="add-funds"
          type="button"
          onClick={confirmPayment}
        >
          add funds!
        </YellowGreenButton>
      ) : (
        showButton &&
        paymentIsProcessing && (
          <YellowGreenButton className="disabled">
            please wait....
          </YellowGreenButton>
        )
      )}
    </>
  );
};

export default AddFundsButton;
