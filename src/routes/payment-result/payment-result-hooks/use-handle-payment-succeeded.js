import { useSelector, useDispatch } from "react-redux";
import { addWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.slice";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import useFireSwal from "../../../hooks/use-fire-swal";
import { bookSessionRoute, fundsAddedMessage } from "../../../strings/strings";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

const useHandlePaymentSucceeded = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  const dispatch = useDispatch();
  const { id, email } = currentUser;

  const handlePaymentSucceeded = () => {
    dispatch(addWalletFundsToDatabaseAsync({ id, walletFundsToAdd })).then(
      (resultAction) => {
        if (addWalletFundsToDatabaseAsync.fulfilled.match(resultAction)) {
          fireSwal(
            "success",
            fundsAddedMessage(email),
            "",
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              hamburgerHandlerNavigate(bookSessionRoute);
            }
          });
        } else {
          fireSwal(
            "error",
            "payment succeeded but error updating balance",
            "we will email the app owner",
            // paymentSucceededButDatabaseUpdateErrorMessage,
            // `${contactOwnerQuotingError}${error}`,
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              alert("weve sent an email");
              //send email and handle accordingly
            }
          });
        }
      }
    );
  };

  return { handlePaymentSucceeded };
};

export default useHandlePaymentSucceeded;
