import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";
import useCardInputResultActions from "../../../hooks/get-actions-and-thunks/use-card-input-result-actions";

import {
  selectHandlePaymentSelectors,
  resetClientSecret,
} from "../../../store/handle-payment/handle-payment.slice";
import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useClearCardInputOnZeroWalletFunds = () => {
  const { error, warning, showPrePayButton } = useGetCardInputResultSelectors();
  const { dispatchResetCardInputResultState } = useCardInputResultActions();

  const { client_secret } = useSelector(selectHandlePaymentSelectors);
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!error && !warning && !showPrePayButton) return;

    if (!walletFundsToAdd && !client_secret) {
      dispatchResetCardInputResultState();
    } else if (!walletFundsToAdd && client_secret) {
      dispatchResetCardInputResultState();
      dispatch(resetClientSecret());
    }
  }, [
    dispatch,
    walletFundsToAdd,
    client_secret,
    error,
    warning,
    showPrePayButton,
    dispatchResetCardInputResultState,
  ]);
};

export default useClearCardInputOnZeroWalletFunds;
