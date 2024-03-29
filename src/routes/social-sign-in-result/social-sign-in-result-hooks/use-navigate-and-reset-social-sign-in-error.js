import { useNavigate } from "react-router-dom";

import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";

import {
  contactRoute,
  signInRoute,
} from "../../../strings/routes/routes-strings";

const useNavAndResetSocialSignInError = () => {
  const { dispatchResetCurrentUserErrorMessage } = useCurrentUserActions();

  const navigate = useNavigate();

  const reloadAndResetError = () => {
    window.location.reload();
  };

  const returnToSignInAndResetError = () => {
    navigate(signInRoute);
    dispatchResetCurrentUserErrorMessage();
  };

  const goToContactUsAndResetError = () => {
    navigate(contactRoute);
    dispatchResetCurrentUserErrorMessage();
  };

  return {
    reloadAndResetError,
    returnToSignInAndResetError,
    goToContactUsAndResetError,
  };
};

export default useNavAndResetSocialSignInError;
