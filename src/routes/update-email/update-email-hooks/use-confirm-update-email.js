import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useGetUpdateEmailSelectors from "../../../hooks/get-selectors/use-get-update-email-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useUpdateEmailThunk from "../../../hooks/get-actions-and-thunks/update-email-actions-and-thunks/use-update-email-thunk";

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
  const { email } = useGetCurrentUserSelectors();
  const { newEmail, confirmNewEmail } = useGetUpdateEmailSelectors();
  const { updateEmailThunk } = useUpdateEmailThunk();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const confirmResult = () => {
    updateEmailThunk();
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
