import { account } from "../../utils/appwrite/appwrite-config";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../store/user/user.slice";
import { startLoader, stopLoader } from "../../store/loader/loader.slice";

const useSocialLogins = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    dispatch(startLoader());
    try {
      if (import.meta.env.MODE === "development") {
        account.createOAuth2Session(
          "google",
          "http://localhost:8888/account",
          "http://localhost:8888/sign-in"
        );
      } else if (import.meta.env.MODE === "production") {
        account.createOAuth2Session(
          "facebook",
          "https://breakfast-and-after-school-club.netlify.app/account",
          "https://breakfast-and-after-school-club.netlify.app/sign-in"
        );
      }
      const user = await account.get();
      dispatch(stopLoader());
      dispatch(setCurrentUser(user));
    } catch (error) {
      dispatch(stopLoader());
      console.log(error.message);
    }
  };

  const signInWithFacebook = async () => {
    dispatch(startLoader());
    try {
      if (import.meta.env.MODE === "development") {
        account.createOAuth2Session(
          "facebook",
          "http://localhost:8888/account",
          "http://localhost:8888/sign-in"
        );
      } else if (import.meta.env.MODE === "production") {
        account.createOAuth2Session(
          "facebook",
          "https://breakfast-and-after-school-club.netlify.app/account",
          "https://breakfast-and-after-school-club.netlify.app/sign-in"
        );
      }
      const user = await account.get();
      dispatch(stopLoader());
      dispatch(setCurrentUser(user));
    } catch (error) {
      dispatch(stopLoader());
      console.log(error.message);
    }
  };

  return { signInWithGoogle, signInWithFacebook };
};

export default useSocialLogins;
