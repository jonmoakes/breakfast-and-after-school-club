import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { selectUpdateEmailSelectors } from "../../../store/update-email/update-email.slice";
import { updateEmailAsync } from "../../../store/update-email/update-email.thunks";

import { validateEmail } from "../../../functions/validate-email";

import {
  invalidEmailErrorMessage,
  imSureMessage,
  confirmUpdateEmailMessage,
  sameEmailMessage,
  chooseAnotherEmailMessage,
} from "../../../strings/strings";

const useConfirmUpdateEmail = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const { updateEmailDetails } = useSelector(selectUpdateEmailSelectors);
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const { id, email } = currentUser;
  const { newEmail, confirmNewEmail, password } = updateEmailDetails;
  const { databaseId, userCollectionId: collectionId } = envVariables;

  const confirmResult = () => {
    dispatch(
      updateEmailAsync({ id, newEmail, password, databaseId, collectionId })
    );
  };

  const confirmUpdateEmail = () => {
    if (!validateEmail(newEmail)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
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
