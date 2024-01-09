import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useAccountClosureEmail from "./use-account-closure-email";
import useGetEnvironmentVariables from "../../../hooks/use-get-environment-variables";

import { selectCurrentUser } from "../../../store/user/user.selector";

import { closeAccountAsync } from "../../../store/close-account/close-account.slice";

import {
  imSureMessage,
  loseAllAccountDataMessage,
  sureCloseAccountQuestion,
  walletHasPositiveBalanceMessage,
} from "../../../strings/strings";

const useConfirmCloseAccount = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { accountClosureEmail } = useAccountClosureEmail();
  const { appOwnerEmail } = useGetEnvironmentVariables();

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const { walletBalance, email, schoolCode } = currentUser;

  const confirmResult = () => {
    dispatch(
      closeAccountAsync({
        schoolCode,
        email,
        appOwnerEmail,
        accountClosureEmail,
      })
    );
  };

  const confirmCloseAccount = () => {
    if (walletBalance > 0) {
      fireSwal(
        "info",
        `you have £${walletBalance / 100} in your account.`,
        walletHasPositiveBalanceMessage,
        0,
        true,
        false
      );
    } else {
      confirmSwal(
        sureCloseAccountQuestion,
        loseAllAccountDataMessage,
        imSureMessage,
        confirmResult
      );
    }
  };

  return { confirmCloseAccount };
};

export default useConfirmCloseAccount;
