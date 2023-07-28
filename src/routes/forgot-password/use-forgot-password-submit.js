import { useDispatch, useSelector } from "react-redux";
import { account } from "../../utils/appwrite/appwrite-config";

import useFireSwal from "../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../store/loader/loader.slice";
import {
  setForgotPasswordEmail,
  clearForgotPasswordEmail,
} from "../../store/forgot-password/forgot-password.slice";
import { selectForgotPasswordEmail } from "../../store/forgot-password/forgot-password.selector";

import {
  forgotPasswordRoute,
  invalidEmailErrorMessage,
  successMessage,
  checkEmailMessage,
  localhostForgotPasswordResultRoute,
} from "../../strings/strings";

import { validateEmail } from "../../functions/validate-email";

const useForgotPasswordSubmit = () => {
  const { fireSwal } = useFireSwal();

  const forgotPasswordEmail = useSelector(selectForgotPasswordEmail);

  const dispatch = useDispatch();

  const generateForgotPasswordLink = async () => {
    dispatch(startLoader());

    try {
      if (import.meta.env.MODE === "development") {
        await account.createRecovery(
          forgotPasswordEmail,
          localhostForgotPasswordResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createRecovery(
          forgotPasswordEmail,
          `https://breakfast-and-after-school-club.netlify.app${forgotPasswordRoute}`
        );
      }
      dispatch(stopLoader());
      fireSwal("success", successMessage, checkEmailMessage, 0, true, true);
      dispatch(clearForgotPasswordEmail());
    } catch (error) {
      dispatch(stopLoader());
      const errorMessageResult =
        error.message === "User with the requested ID could not be found."
          ? "the email address you entered does not match any email in our database."
          : `${error.message}`;
      fireSwal(
        "error",
        "sorry, there was an error...",
        errorMessageResult,
        0,
        true,
        true
      );
    }
  };

  const handleForgotPasswordEmailChange = (event) => {
    dispatch(setForgotPasswordEmail(event.target.value));
  };

  const handleForgotPasswordSubmit = () => {
    if (!validateEmail(forgotPasswordEmail)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
    } else {
      generateForgotPasswordLink();
    }
  };

  return { handleForgotPasswordSubmit, handleForgotPasswordEmailChange };
};

export default useForgotPasswordSubmit;
