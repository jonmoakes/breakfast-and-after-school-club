import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.slice";
import {
  selectUploadResult,
  selectPaymentResult,
} from "../../../store/handle-payment/handle-payment.selector";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";

const useHandlePaymentSucceeded = () => {
  const uploadResult = useSelector(selectUploadResult);
  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const paymentResult = useSelector(selectPaymentResult);

  const paymentResultStatus =
    paymentResult?.paymentIntent?.status === undefined
      ? "undefined"
      : paymentResult.paymentIntent.status;

  const dispatch = useDispatch();
  const { id } = currentUser;

  useEffect(() => {
    if (
      !Object.keys(paymentResult).length ||
      paymentResultStatus === "undefined" ||
      paymentResultStatus !== "succeeded" ||
      uploadResult === "failed"
    )
      return;

    dispatch(
      uploadWalletFundsToDatabaseAsync({ uploadResult, id, walletFundsToAdd })
    );
  }, [
    paymentResultStatus,
    dispatch,
    id,
    paymentResult,
    uploadResult,
    walletFundsToAdd,
  ]);
};

export default useHandlePaymentSucceeded;
