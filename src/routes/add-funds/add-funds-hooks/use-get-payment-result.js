import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetClientSecret from "./use-get-client-secret";
import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";
import useCardInputResultActions from "../../../hooks/get-actions-and-thunks/use-card-input-result-actions";

import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import {
  selectHandlePaymentSelectors,
  resetAllHandlePaymentState,
} from "../../../store/handle-payment/handle-payment.slice";
import { getPaymentResultAsync } from "../../../store/handle-payment/handle-payment.thunks";
import { resetWalletFundsToAddState } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

import {
  addFundsMessage,
  confirmAddFundsMessage,
} from "../../../strings/confirms/confirms-strings";

const useGetPaymentResult = () => {
  const { confirmSwal } = useConfirmSwal();
  const { getClientSecret } = useGetClientSecret();
  const { showPrePayButton } = useGetCardInputResultSelectors();
  const { dispatchResetCardInputResultState } = useCardInputResultActions();

  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  const { client_secret, showConfirmButton, userHasConfirmedPayment } =
    useSelector(selectHandlePaymentSelectors);

  const { name, email } = currentUser;

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const shouldShowConfirmAddFundsSwal = () => {
      return showPrePayButton &&
        showConfirmButton &&
        walletFundsToAdd &&
        client_secret
        ? true
        : false;
    };

    if (
      !stripe ||
      !elements ||
      !shouldShowConfirmAddFundsSwal() ||
      userHasConfirmedPayment
    )
      return;

    const confirmResult = () => {
      dispatch(
        getPaymentResultAsync({
          stripe,
          client_secret,
          cardElement: elements.getElement(CardElement),
          name,
          email,
        })
      );
    };

    const cancelResult = () => {
      dispatch(resetAllHandlePaymentState());
      dispatchResetCardInputResultState();
      dispatch(resetWalletFundsToAddState());
    };

    confirmSwal(
      confirmAddFundsMessage(walletFundsToAdd),
      "",
      addFundsMessage,
      confirmResult,
      cancelResult
    );
  }, [
    client_secret,
    confirmSwal,
    dispatch,
    elements,
    name,
    email,
    stripe,
    walletFundsToAdd,
    showConfirmButton,
    showPrePayButton,
    userHasConfirmedPayment,
    dispatchResetCardInputResultState,
  ]);

  return { getClientSecret };
};

export default useGetPaymentResult;
