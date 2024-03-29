import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { sendEmailToAdminCloseAccountRequestAsync } from "../../../store/send-email/send-email.thunks";

import {
  loseAllAccountDataMessage,
  walletHasPositiveBalanceMessage,
} from "../../../strings/infos/infos-strings";
import {
  sureCloseAccountQuestion,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmCloseAccount = () => {
  const { walletBalance, id, email, appOwnerEmail } =
    useGetCurrentUserSelectors();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

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
