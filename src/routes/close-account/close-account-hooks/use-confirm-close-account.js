import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useSendEmailToAdminCloseAccountRequestThunk from "../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-email-to-admin-close-account-request-thunk";
import useGetUsersChildrenThunkUseEffect from "../../../hooks/get-actions-and-thunks/get-users-children-actions-and-thunks/use-get-users-children-thunk-use-effect";
import {
  loseAllAccountDataMessage,
  walletHasPositiveBalanceMessage,
} from "../../../strings/infos/infos-strings";
import {
  sureCloseAccountQuestion,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import { couldntFetchUsersChildrenErrorMessage } from "../../../strings/errors/errors-strings";

const useConfirmCloseAccount = () => {
  useGetUsersChildrenThunkUseEffect();
  const { walletBalance } = useGetCurrentUserSelectors();
  const { usersChildren } = useGetUsersChildrenSelectors();
  const { sendEmailToAdminCloseAccountRequestThunk } =
    useSendEmailToAdminCloseAccountRequestThunk();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const childrenIdsArray = usersChildren
    ? usersChildren.map((child) => child.$id)
    : null;
  const childrenIdsToDelete = childrenIdsArray
    ? childrenIdsArray.join(", ")
    : null;

  const confirmResult = () => {
    sendEmailToAdminCloseAccountRequestThunk(childrenIdsToDelete);
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
    } else if (usersChildren && !usersChildren.length) {
      fireSwal(
        "error",
        couldntFetchUsersChildrenErrorMessage,
        "",
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
