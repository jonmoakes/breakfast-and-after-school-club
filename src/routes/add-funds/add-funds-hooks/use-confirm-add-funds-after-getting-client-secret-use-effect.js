import { useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useCardInputResultActions from "../../../hooks/get-actions-and-thunks/use-card-input-result-actions";
import useHandlePaymentActions from "../../../hooks/get-actions-and-thunks/handle-payment-actions-and-thunks/use-handle-payment-actions";
import useGetPaymentResultObjectThunk from "../../../hooks/get-actions-and-thunks/handle-payment-actions-and-thunks/use-get-payment-result-object-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  addFundsMessage,
  confirmAddFundsMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmAddFundsAfterGettingClientSecretUseEffect = () => {
  const { showPrePayButton } = useGetCardInputResultSelectors();
  const { client_secret, showConfirmButton, userHasConfirmedPayment } =
    useGetHandlePaymentSelectors();
  const { walletFundsToAdd } = useGetCurrentUserSelectors();
  const { dispatchResetWalletFundsToAdd } = useCurrentUserActions();
  const { dispatchResetCardInputResultState } = useCardInputResultActions();
  const { dispatchResetAllHandlePaymentState } = useHandlePaymentActions();
  const { getPaymentResultObjectThunk } = useGetPaymentResultObjectThunk();
  const { confirmSwal } = useConfirmSwal();

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
      getPaymentResultObjectThunk();
    };

    const cancelResult = () => {
      dispatchResetAllHandlePaymentState();
      dispatchResetCardInputResultState();
      dispatchResetWalletFundsToAdd();
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
    dispatchResetWalletFundsToAdd,
    dispatchResetCardInputResultState,
    dispatchResetAllHandlePaymentState,
    elements,
    getPaymentResultObjectThunk,
    showConfirmButton,
    showPrePayButton,
    stripe,
    userHasConfirmedPayment,
    walletFundsToAdd,
  ]);
};

export default useConfirmAddFundsAfterGettingClientSecretUseEffect;
