import { useDispatch, useSelector } from "react-redux";
import { account, databases } from "../../../utils/appwrite/appwrite-config";

import useFireSwal from "../../../hooks/use-fire-swal";

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
} from "../../../strings/strings";

const useUpdateEmailSubmit = () => {
  const { fireSwal } = useFireSwal();

  const updateEmailDetails = useSelector(selectUpdateEmailDetails);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const { id } = currentUser;
  const { newEmail, password } = updateEmailDetails;

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
          "sorry, there was an error updating your email address.",
          error.message,
          0,
          true,
          true
        );
      }
    }
  };

  const updateEmailSubmit = () => {
    if (!validateEmail(newEmail)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
    } else {
      updateEmailAddress();
    }
  };

  return { updateEmailSubmit };
};

export default useUpdateEmailSubmit;
