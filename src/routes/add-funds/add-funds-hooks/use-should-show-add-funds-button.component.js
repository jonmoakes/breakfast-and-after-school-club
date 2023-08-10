import { useSelector } from "react-redux";

import { selectClientSecret } from "../../../store/handle-payment/handle-payment.selector";
import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCardInputResult } from "../../../store/card-input-result/card-input-result.selector";

const useShouldShowAddFundsButton = () => {
  const client_secret = useSelector(selectClientSecret);
  const cardInputResult = useSelector(selectCardInputResult);
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
