import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import {
  selectClientSecret,
  selectShowConfirmButton,
} from "../../../store/handle-payment/handle-payment.selector";
import { selectCardInputResult } from "../../../store/card-input-result/card-input-result.selector";
import {
  getClientSecretAsync,
  getPaymentResultAsync,
} from "../../../store/handle-payment/handle-payment.slice";
import { resetWalletFundsToAddState } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetAllHandlePaymentState } from "../../../store/handle-payment/handle-payment.slice";
import { resetCardInputState } from "../../../store/card-input-result/card-input-result.slice";

import {
  addFundsMessage,
  confirmAddFundsMessage,
} from "../../../strings/strings";

const useGetPaymentResult = () => {
  const { confirmSwal } = useConfirmSwal();

  const envVariables = useSelector(selectEnvironmentVariables);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const currentUser = useSelector(selectCurrentUser);
  const client_secret = useSelector(selectClientSecret);
  const cardInputResult = useSelector(selectCardInputResult);
  const showConfirmButton = useSelector(selectShowConfirmButton);
  const { name, email } = currentUser;
  const { stripeSecretKey } = envVariables;
  const { showPrePayButton } = cardInputResult;

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const getClientSecret = () => {
    if (!stripe || !elements) return;
    dispatch(getClientSecretAsync({ stripeSecretKey, walletFundsToAdd }));
  };

  useEffect(() => {
    const shouldShowConfirmAddFundsSwal = () => {
      return showPrePayButton &&
        showConfirmButton &&
        walletFundsToAdd &&
        client_secret
        ? true
        : false;
    };

    if (!stripe || !elements || !shouldShowConfirmAddFundsSwal()) return;

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
      dispatch(resetCardInputState());
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
  ]);

  return { getClientSecret };
};

export default useGetPaymentResult;
