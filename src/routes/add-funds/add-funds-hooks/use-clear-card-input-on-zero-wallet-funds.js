import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectClientSecret } from "../../../store/handle-payment/handle-payment.selector";
import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCardInputResult } from "../../../store/card-input-result/card-input-result.selector";
import { resetCardInputState } from "../../../store/card-input-result/card-input-result.slice";
import { resetClientSecret } from "../../../store/handle-payment/handle-payment.slice";

const useClearCardInputOnZeroWalletFunds = () => {
  const client_secret = useSelector(selectClientSecret);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const cardInputResult = useSelector(selectCardInputResult);

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
