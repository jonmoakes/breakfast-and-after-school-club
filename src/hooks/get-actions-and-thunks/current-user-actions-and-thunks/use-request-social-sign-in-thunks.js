import { useDispatch } from "react-redux";
import {
  requestFacebookSignInAsync,
  requestGoogleSignInAsync,
} from "../../../store/user/user.thunks";

const useRequestSocialSignInThunks = () => {
  const dispatch = useDispatch();

  const signInWithFacebookThunk = () => {
    dispatch(requestFacebookSignInAsync());
  };

  const signInWithGoogleThunk = () => {
    dispatch(requestGoogleSignInAsync());
  };

  return { signInWithFacebookThunk, signInWithGoogleThunk };
};

export default useRequestSocialSignInThunks;
