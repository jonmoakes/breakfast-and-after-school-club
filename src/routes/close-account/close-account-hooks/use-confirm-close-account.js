import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { sendEmailToAdminCloseAccountRequestAsync } from "../../../store/send-email/send-email.thunks";

import {
  imSureMessage,
  loseAllAccountDataMessage,
  sureCloseAccountQuestion,
  walletHasPositiveBalanceMessage,
} from "../../../strings/strings";

const useConfirmCloseAccount = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();
  const { walletBalance, schoolCode, id, email } = currentUser;
  const { appOwnerEmail } = envVariables;

  const confirmResult = () => {
    dispatch(
      sendEmailToAdminCloseAccountRequestAsync({
        schoolCode,
        appOwnerEmail,
        id,
        email,
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
