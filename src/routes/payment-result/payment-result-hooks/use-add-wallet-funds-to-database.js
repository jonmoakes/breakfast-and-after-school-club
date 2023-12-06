import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectWalletFundsAddedResult,
  selectHandlePaymentError,
} from "../../../store/handle-payment/handle-payment.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { addWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.slice";

import {
  bookSessionRoute,
  // accountRoute,
  // bookSessionRoute,
  contactOwnerQuotingError,
  // errorSubmittingPaymentMessage,
  fundsAddedMessage,
  paymentSucceededButDatabaseUpdateErrorMessage,
} from "../../../strings/strings";

const useAddWalletFundsToDatabase = () => {
  const { fireSwal } = useFireSwal();

  const walletFundsAddedResult = useSelector(selectWalletFundsAddedResult);
  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const error = useSelector(selectHandlePaymentError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, email } = currentUser;

  useEffect(() => {
    if (!error && walletFundsAddedResult) return;
    dispatch(
      addWalletFundsToDatabaseAsync({
        id,
        walletFundsToAdd,
      })
    ).then((resultAction) => {
      if (addWalletFundsToDatabaseAsync.fulfilled.match(resultAction)) {
        fireSwal("success", fundsAddedMessage(email), "", 0, true, false).then(
          (isConfirmed) => {
            if (isConfirmed) {
              navigate(bookSessionRoute);
            }
          }
        );
      } else {
        fireSwal(
          "error",
          paymentSucceededButDatabaseUpdateErrorMessage,
          `${contactOwnerQuotingError}${error}`,
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            alert("weve sent an email");
            //send email
          }
        });
      }
    });
  }, [
    dispatch,
    error,
    fireSwal,
    id,
    navigate,
    walletFundsAddedResult,
    walletFundsToAdd,
    email,
  ]);
};

export default useAddWalletFundsToDatabase;
