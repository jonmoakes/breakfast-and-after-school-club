import { useSelector } from "react-redux";

import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";
import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCardInputResult } from "../../../store/card-input-result/card-input-result.slice";

const useShouldShowAddFundsButton = () => {
  const { client_secret } = useSelector(selectHandlePaymentSelectors);
  const { cardInputResult } = useSelector(selectCardInputResult);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  const { showPrePayButton } = cardInputResult;

  const shouldShowAddFundsButton = () => {
    if (!walletFundsToAdd) {
      return false;
    } else if (showPrePayButton && !client_secret && walletFundsToAdd) {
      return true;
    }
  };

  return { shouldShowAddFundsButton };
};

export default useShouldShowAddFundsButton;
