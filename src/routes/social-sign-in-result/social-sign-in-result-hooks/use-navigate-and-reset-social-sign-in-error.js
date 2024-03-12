import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";

import {
  contactRoute,
  signInRoute,
} from "../../../strings/routes/routes-strings";

const useNavAndResetSocialSignInError = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reloadAndResetError = () => {
    window.location.reload();
  };

  const returnToSignInAndResetError = () => {
    navigate(signInRoute);
    dispatch(resetCurrentUserErrorMessage());
  };

  const goToContactUsAndResetError = () => {
    navigate(contactRoute);
    dispatch(resetCurrentUserErrorMessage());
  };

  return {
    reloadAndResetError,
    returnToSignInAndResetError,
    goToContactUsAndResetError,
  };
};

export default useNavAndResetSocialSignInError;
