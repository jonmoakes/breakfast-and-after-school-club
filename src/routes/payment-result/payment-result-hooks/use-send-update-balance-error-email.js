import { useSelector, useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { sendEmailWithErrorAsync } from "../../../store/send-email/send-email-thunks";
import { setContactFormDetailsWhenBookingError } from "../../../store/contact-form/contact-form.slice";

import {
  accountRoute,
  contactRoute,
  failedToSendEmailInstructions,
} from "../../../strings/strings";

const useSendUpdateBalanceErrorEmail = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  const dispatch = useDispatch();
  const { id, name, email } = currentUser;

  const subject =
    "Breakfast & After School Club - A Users Balance Was Not Updated In The Database.";

  const message = `Error Updating A Users Balance In The Database. Please Update The Following Users Balance Manually.\n_____________\nUsers ID:\n${id}\n\nUsers Name:\n${name}\n\nUsers Email:\n${email}\n\nIncrease The Users 'Wallet Balance' Field By The Following:\n${
    walletFundsToAdd * 100
  }\n\n\nEXAMPLE - If Users Balance Is Currently 500 ( £5 ), The New Wallet Balance Should Be 500 Plus ${
    walletFundsToAdd * 100
  } = 1000\n\n`;

  const dataToSendToContactForm = {
    name: "Email Failed To Send Error",
    email: "info@breakfast-and-afterschool-club.com",
    message,
  };

  const sendUpdateBalanceErrorEmail = () => {
    dispatch(sendEmailWithErrorAsync({ subject, message })).then(
      (resultAction) => {
        if (sendEmailWithErrorAsync.fulfilled.match(resultAction)) {
          hamburgerHandlerNavigate(accountRoute);
        } else {
          fireSwal(
            "error",
            failedToSendEmailInstructions,
            "",
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              dispatch(
                setContactFormDetailsWhenBookingError(dataToSendToContactForm)
              );
              hamburgerHandlerNavigate(contactRoute);
            }
          });
        }
      }
    );
  };

  return { sendUpdateBalanceErrorEmail };
};

export default useSendUpdateBalanceErrorEmail;
