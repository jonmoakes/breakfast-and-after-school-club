import { account } from "../../utils/appwrite/appwrite-config";
import { useDispatch } from "react-redux";

import useFireSwal from "../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../store/loader/loader.slice";

import {
  errorRquestingOAuth2Session,
  localhostSocialLoginResultRoute,
  socialLoginResultRoute,
} from "../../strings/strings";

const useSocialLogins = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const errorRequestingAuthSession = (error) => {
    fireSwal(
      "error",
      errorRquestingOAuth2Session,
      `the error received was: ${error.message}`,
      0,
      true,
      false
    );
  };

  const signInWithFacebook = async () => {
    dispatch(startLoader());
    try {
      if (import.meta.env.MODE === "development") {
        account.createOAuth2Session(
          "facebook",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
        dispatch(stopLoader());
      } else if (import.meta.env.MODE === "production") {
        account.createOAuth2Session(
          "facebook",
          socialLoginResultRoute,
          socialLoginResultRoute
        );
        dispatch(stopLoader());
      }
    } catch (error) {
      dispatch(stopLoader());
      errorRequestingAuthSession(error);
    }
  };

  const signInWithGoogle = async () => {
    dispatch(startLoader());
    try {
      if (import.meta.env.MODE === "development") {
        account.createOAuth2Session(
          "google",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        account.createOAuth2Session(
          "google",
          socialLoginResultRoute,
          socialLoginResultRoute
        );
      }
    } catch (error) {
      dispatch(stopLoader());
      errorRequestingAuthSession(error);
    }
  };

  return { signInWithFacebook, signInWithGoogle };
};

export default useSocialLogins;
