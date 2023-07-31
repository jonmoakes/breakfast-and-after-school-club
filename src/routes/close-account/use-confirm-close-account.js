import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import useConfirmSwal from "../../hooks/use-confirm-swal";
import useFireSwal from "../../hooks/use-fire-swal";
import useAccountClosureEmail from "./use-account-closure-email";

import { selectCurrentUser } from "../../store/user/user.selector";
import { startLoader, stopLoader } from "../../store/loader/loader.slice";
import { imSureMessage, successMessage } from "../../strings/strings";

const useConfirmCloseAccount = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { accountClosureEmail } = useAccountClosureEmail();

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { walletBalance, email } = currentUser;

  const confirmResult = async () => {
    dispatch(startLoader());
    const dataToSend = { email, accountClosureEmail };

    await axios
      .post("/.netlify/functions/send-account-closure-message", {
        message: dataToSend,
      })
      .then(
        (response) => {
          dispatch(stopLoader());
          if (response.status === 202) {
            fireSwal(
              "success",
              successMessage,
              "your account closure process has started!",
              0,
              true,
              false
            );
          }
        },
        (error) => {
          dispatch(stopLoader());
          fireSwal(
            "error",
            "there was an error sending your request...",
            `error message: ${error.message}`,
            0,
            true,
            false
          );
        }
      );
  };

  const confirmCloseAccount = () => {
    if (walletBalance > 0) {
      fireSwal(
        "info",
        `you have £${walletBalance / 100} in your account.`,
        "please either spend or request a refund for this amount before proceeding",
        0,
        true,
        false
      );
    } else {
      confirmSwal(
        "are you sure you wish to close your account with us?",
        "you will permanently lose all data",
        imSureMessage,
        confirmResult
      );
    }
  };

  return { confirmCloseAccount };
};

export default useConfirmCloseAccount;
