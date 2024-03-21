import { useSelector } from "react-redux";

import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";

import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";
import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useShouldShowAddFundsButton = () => {
  const { showPrePayButton } = useGetCardInputResultSelectors();

  const { client_secret } = useSelector(selectHandlePaymentSelectors);
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

  const shouldShowAddFundsButton = () => {
    return showPrePayButton && !client_secret && walletFundsToAdd
      ? true
      : false;
  };

  return { shouldShowAddFundsButton };
};

export default useShouldShowAddFundsButton;
