import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useCardInputResultActions from "../../../hooks/get-actions-and-thunks/use-card-input-result-actions";
import useGetPaymentResultObjectThunk from "../../../hooks/get-actions-and-thunks/handle-payment-actions-and-thunks/use-get-payment-result-object-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetAllHandlePaymentState } from "../../../store/handle-payment/handle-payment.slice";

import { resetWalletFundsToAddState } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

import {
  addFundsMessage,
  confirmAddFundsMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmAddFundsAfterGettingClientSecret = () => {
  const { showPrePayButton } = useGetCardInputResultSelectors();
  const { client_secret, showConfirmButton, userHasConfirmedPayment } =
    useGetHandlePaymentSelectors();
  const { dispatchResetCardInputResultState } = useCardInputResultActions();
  const { getPaymentResultObjectThunk } = useGetPaymentResultObjectThunk();
  const { confirmSwal } = useConfirmSwal();

  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

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
      getPaymentResultObjectThunk();
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
    dispatchResetCardInputResultState,
    elements,
    getPaymentResultObjectThunk,
    showConfirmButton,
    showPrePayButton,
    stripe,
    userHasConfirmedPayment,
    walletFundsToAdd,
  ]);
};

export default useConfirmAddFundsAfterGettingClientSecret;
