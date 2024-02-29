import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
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

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const dispatch = useDispatch();
  const { walletBalance, id, email } = currentUser;
  const { appOwnerEmail } = currentUserEnvironmentVariables;

  const confirmResult = () => {
    dispatch(
      sendEmailToAdminCloseAccountRequestAsync({
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
