import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectHandlePaymentSelectors,
  resetClientSecret,
} from "../../../store/handle-payment/handle-payment.slice";
import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import {
  selectCardInputResult,
  resetCardInputState,
} from "../../../store/card-input-result/card-input-result.slice";

const useClearCardInputOnZeroWalletFunds = () => {
  const { client_secret } = useSelector(selectHandlePaymentSelectors);
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);
  const { cardInputResult } = useSelector(selectCardInputResult);

  const dispatch = useDispatch();
  const { error, warning, showPrePayButton } = cardInputResult;

  useEffect(() => {
    if (!error && !warning && !showPrePayButton) return;

    if (!walletFundsToAdd && !client_secret) {
      dispatch(resetCardInputState());
    } else if (!walletFundsToAdd && client_secret) {
      dispatch(resetCardInputState());
      dispatch(resetClientSecret());
    }
  }, [
    dispatch,
    walletFundsToAdd,
    client_secret,
    error,
    warning,
    showPrePayButton,
  ]);
};

export default useClearCardInputOnZeroWalletFunds;
