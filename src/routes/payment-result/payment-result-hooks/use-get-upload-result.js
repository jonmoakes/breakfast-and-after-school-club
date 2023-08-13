import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectUploadResult,
  selectHandlePaymentError,
} from "../../../store/handle-payment/handle-payment.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { resetAllHandlePaymentState } from "../../../store/handle-payment/handle-payment.slice";
import { clearWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetCardInputState } from "../../../store/card-input-result/card-input-result.slice";

import {
  accountRoute,
  contactOwnerQuotingError,
  fundsAddedMessage,
  paymentSucceededButDatabaseUpdateErrorMessage,
} from "../../../strings/strings";

const useGetUploadResult = () => {
  const { fireSwal } = useFireSwal();

  const uploadResult = useSelector(selectUploadResult);
  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const error = useSelector(selectHandlePaymentError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, email } = currentUser;

  useEffect(() => {
    if (!uploadResult) return;

    if (uploadResult === "success") {
      if (walletFundsToAdd) {
        dispatch(clearWalletFundsToAdd());
      }

      fireSwal("success", fundsAddedMessage(email), "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetCardInputState());
            dispatch(resetAllHandlePaymentState());
            navigate(accountRoute);
          }
        }
      );
    } else if (uploadResult === "failed") {
      if (walletFundsToAdd) {
        dispatch(clearWalletFundsToAdd());
      }

      fireSwal(
        "error",
        paymentSucceededButDatabaseUpdateErrorMessage,
        `${contactOwnerQuotingError}${error}`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCardInputState());
          dispatch(resetAllHandlePaymentState());
          navigate(accountRoute);
        }
      });
    }
  }, [
    fireSwal,
    name,
    email,
    navigate,
    uploadResult,
    dispatch,
    walletFundsToAdd,
    error,
  ]);
};

export default useGetUploadResult;
