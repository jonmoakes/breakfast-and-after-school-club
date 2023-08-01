import { useDispatch, useSelector } from "react-redux";
import { account, databases } from "../../../utils/appwrite/appwrite-config";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectUpdateEmailDetails } from "../../../store/update-email/update-email.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { resetUpdateEmailFields } from "../../../store/update-email/update-email.slice";
import { startLoader, stopLoader } from "../../../store/loader/loader.slice";

import { validateEmail } from "../../../functions/validate-email";

import {
  invalidEmailErrorMessage,
  signInWithNewEmailMessage,
  emailChangedMessage,
  passwordErrorMessage,
  passwordErrorInstructions,
  appwritePasswordError,
  areYouSureMessage,
  imSureMessage,
  errorUpdatingEmailMessage,
} from "../../../strings/strings";

const useConfirmUpdateEmail = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const updateEmailDetails = useSelector(selectUpdateEmailDetails);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const { id } = currentUser;
  const { newEmail, password } = updateEmailDetails;

  const confirmResult = () => {
    updateEmailAddress();
  };

  const confirmUpdateEmail = () => {
    if (!validateEmail(newEmail)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
    } else {
      confirmSwal(areYouSureMessage, "", imSureMessage, confirmResult);
    }
  };

  const updateEmailAddress = async () => {
    dispatch(startLoader());
    try {
      await account.updateEmail(newEmail, password);
      await databases.updateDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        id,
        { email: newEmail }
      );
      await account.deleteSessions();
      dispatch(stopLoader());
      dispatch(resetUpdateEmailFields());
      fireSwal(
        "success",
        emailChangedMessage,
        signInWithNewEmailMessage,
        0,
        false,
        false
      );
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    } catch (error) {
      dispatch(stopLoader());
      if (error.message === appwritePasswordError) {
        fireSwal(
          "error",
          passwordErrorMessage,
          passwordErrorInstructions,
          0,
          true,
          true
        );
      } else {
        fireSwal(
          "error",
          errorUpdatingEmailMessage,
          `The error received was: ${error.message}`,
          0,
          true,
          true
        );
      }
    }
  };

  return { confirmUpdateEmail };
};

export default useConfirmUpdateEmail;
