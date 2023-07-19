import { useState } from "react";
import { useDispatch } from "react-redux";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import useFireSwal from "../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../store/loader/loader.slice";

import {
  magicUrlResultRoute,
  invalidEmailErrorMessage,
  successMessage,
  checkEmailMessage,
  localhostMagicUrlResultRoute,
  signInRoute,
} from "../../strings/strings";
import { validateEmail } from "../../functions/validate-email";

const useHandleMagicUrlSubmit = () => {
  const { fireSwal } = useFireSwal();

  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const generateMagicUrl = async () => {
    dispatch(startLoader());

    try {
      if (import.meta.env.MODE === "development") {
        await account.createMagicURLSession(
          ID.unique(),
          email,
          localhostMagicUrlResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createMagicURLSession(ID.unique(), email, signInRoute);
      }
      dispatch(stopLoader());
      fireSwal("success", successMessage, checkEmailMessage, 0, true, true);
      setEmail("");
    } catch (error) {
      dispatch(stopLoader());
      fireSwal("success", error.message, "", 0, true, true);
    }
  };

  const handleMagicEmailSubmit = () => {
    if (!validateEmail(email)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
    } else {
      generateMagicUrl();
    }
  };

  return { handleMagicEmailSubmit, email, setEmail };
};

export default useHandleMagicUrlSubmit;
