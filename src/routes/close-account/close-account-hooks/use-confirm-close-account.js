import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useSendEmailToAdminCloseAccountRequestThunk from "../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-email-to-admin-close-account-request-thunk";

import {
  loseAllAccountDataMessage,
  walletHasPositiveBalanceMessage,
} from "../../../strings/infos/infos-strings";
import {
  sureCloseAccountQuestion,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmCloseAccount = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const { sendEmailToAdminCloseAccountRequestThunk } =
    useSendEmailToAdminCloseAccountRequestThunk();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    sendEmailToAdminCloseAccountRequestThunk();
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
