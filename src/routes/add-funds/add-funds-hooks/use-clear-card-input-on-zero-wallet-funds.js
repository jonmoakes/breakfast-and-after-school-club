import { useEffect } from "react";

import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCardInputResultActions from "../../../hooks/get-actions-and-thunks/use-card-input-result-actions";
import useHandlePaymentActions from "../../../hooks/get-actions-and-thunks/handle-payment-actions-and-thunks/use-handle-payment-actions";

const useClearCardInputOnZeroWalletFunds = () => {
  const { client_secret } = useGetHandlePaymentSelectors();
  const { error, warning, showPrePayButton } = useGetCardInputResultSelectors();
  const { walletFundsToAdd } = useGetCurrentUserSelectors();
  const { dispatchResetCardInputResultState } = useCardInputResultActions();
  const { dispatchResetClientSecret } = useHandlePaymentActions();

  useEffect(() => {
    if (!error && !warning && !showPrePayButton) return;

    if (!walletFundsToAdd && !client_secret) {
      dispatchResetCardInputResultState();
    } else if (!walletFundsToAdd && client_secret) {
      dispatchResetCardInputResultState();
      dispatchResetClientSecret();
    }
  }, [
    dispatchResetClientSecret,
    walletFundsToAdd,
    client_secret,
    error,
    warning,
    showPrePayButton,
    dispatchResetCardInputResultState,
  ]);
};

export default useClearCardInputOnZeroWalletFunds;
