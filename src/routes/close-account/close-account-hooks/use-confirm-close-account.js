import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useAccountClosureEmail from "./use-account-closure-email";

import { closeAccountAsync } from "../../../store/close-account/close-account.slice";

import { selectCurrentUser } from "../../../store/user/user.selector";
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

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const { walletBalance, email } = currentUser;

  const confirmResult = () => {
    dispatch(closeAccountAsync({ email, accountClosureEmail }));
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
