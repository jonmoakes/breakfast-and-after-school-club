import { useSelector } from "react-redux";

import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";
import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { selectCardInputResult } from "../../../store/card-input-result/card-input-result.slice";

const useShouldShowAddFundsButton = () => {
  const { client_secret } = useSelector(selectHandlePaymentSelectors);
  const { cardInputResult } = useSelector(selectCardInputResult);
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

  const { showPrePayButton } = cardInputResult;

  const shouldShowAddFundsButton = () => {
    return showPrePayButton && !client_secret && walletFundsToAdd
      ? true
      : false;
  };

  return { shouldShowAddFundsButton };
};

export default useShouldShowAddFundsButton;
