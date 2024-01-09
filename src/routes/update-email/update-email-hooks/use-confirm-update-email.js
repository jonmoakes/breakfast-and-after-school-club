import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectUpdateEmailDetails } from "../../../store/update-email/update-email.selector";
import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { updateEmailAsync } from "../../../store/update-email/update-email.slice";

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

  const updateEmailDetails = useSelector(selectUpdateEmailDetails);
  const currentUser = useSelector(selectCurrentUser);
  const environmentVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();
  const { databaseId, userCollectionId: collectionId } = environmentVariables;
  const { id, email } = currentUser;
  const { newEmail, password } = updateEmailDetails;

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
