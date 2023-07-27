import { useDispatch, useSelector } from "react-redux";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import useFireSwal from "../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../store/loader/loader.slice";
import {
  clearMagicUrlEmail,
  setMagicUrlEmail,
} from "../../store/magic-url/magic-url.slice";
import { selectMagicUrlEmail } from "../../store/magic-url/magic-url.selector";

import {
  magicUrlResultRoute,
  invalidEmailErrorMessage,
  successMessage,
  checkEmailMessage,
  localhostMagicUrlResultRoute,
} from "../../strings/strings";

import { validateEmail } from "../../functions/validate-email";

const useHandleMagicUrlSubmit = () => {
  const { fireSwal } = useFireSwal();

  const magicUrlEmail = useSelector(selectMagicUrlEmail);

  const dispatch = useDispatch();

  const generateMagicUrl = async () => {
    dispatch(startLoader());

    try {
      if (import.meta.env.MODE === "development") {
        await account.createMagicURLSession(
          ID.unique(),
          magicUrlEmail,
          localhostMagicUrlResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createMagicURLSession(
          ID.unique(),
          magicUrlEmail,
          `https://breakfast-and-after-school-club.netlify.app${magicUrlResultRoute}`
        );
      }

      dispatch(stopLoader());
      fireSwal("success", successMessage, checkEmailMessage, 0, true, true);
      dispatch(clearMagicUrlEmail());
    } catch (error) {
      dispatch(stopLoader());
      fireSwal(
        "error",
        "sorry, there was an error...",
        `the error received was: ${error.message}`,
        0,
        true,
        true
      );
    }
  };

  const handleMagicUrlEmailChange = (event) => {
    dispatch(setMagicUrlEmail(event.target.value));
  };

  const handleMagicEmailSubmit = () => {
    if (!validateEmail(magicUrlEmail)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
    } else {
      generateMagicUrl();
    }
  };

  return { handleMagicEmailSubmit, handleMagicUrlEmailChange };
};

export default useHandleMagicUrlSubmit;
