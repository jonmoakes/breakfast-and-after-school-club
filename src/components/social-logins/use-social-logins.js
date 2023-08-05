import { account } from "../../utils/appwrite/appwrite-config";
import { useDispatch } from "react-redux";

import { startLoader, stopLoader } from "../../store/loader/loader.slice";

import {
  localhostSocialLoginResultRoute,
  socialLoginResultRoute,
} from "../../strings/strings";

const useSocialLogins = () => {
  const dispatch = useDispatch();

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
      console.log(error.message);
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
      console.log(error.message);
    }
  };

  return { signInWithFacebook, signInWithGoogle };
};

export default useSocialLogins;
