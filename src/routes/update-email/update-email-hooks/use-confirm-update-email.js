import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useGetUpdateEmailSelectors from "../../../hooks/get-selectors/use-get-update-email-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { updateEmailAsync } from "../../../store/update-email/update-email.thunks";

import {
  imSureMessage,
  confirmUpdateEmailMessage,
} from "../../../strings/confirms/confirms-strings";
import {
  sameEmailMessage,
  chooseAnotherEmailMessage,
} from "../../../strings/infos/infos-strings";

import { validateEmail } from "../../../functions/validate-email";

const useConfirmUpdateEmail = () => {
  const { newEmail, confirmNewEmail, password } = useGetUpdateEmailSelectors();

  const {
    databaseId,
    userCollectionId: collectionId,
    id,
    email,
  } = useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      updateEmailAsync({ id, newEmail, password, databaseId, collectionId })
    );
  };

  const confirmUpdateEmail = () => {
    if (!validateEmail(newEmail)) {
      showInvalidEmailMessageSwal();
    } else if (newEmail === email) {
      fireSwal(
        "error",
        sameEmailMessage,
        chooseAnotherEmailMessage,
        0,
        true,
        false
      );
    } else if (newEmail !== confirmNewEmail) {
      fireSwal("error", "emails dont match", "", 0, true, false);
    } else {
      confirmSwal(
        confirmUpdateEmailMessage(newEmail),
        "",
        imSureMessage,
        confirmResult
      );
    }
  };

  return { confirmUpdateEmail };
};

export default useConfirmUpdateEmail;
