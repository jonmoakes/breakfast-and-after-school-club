import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetErrorMessage } from "../../../store/user/user.slice";
import { contactRoute, signInRoute } from "../../../strings/strings";

const useNavAndResetError = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reloadAndResetError = () => {
    dispatch(resetErrorMessage());
    window.location.reload();
  };

  const returnToSignInAndResetError = () => {
    navigate(signInRoute);
    dispatch(resetErrorMessage());
  };

  const goToContactUsAndResetError = () => {
    navigate(contactRoute);
    dispatch(resetErrorMessage());
  };

  return {
    reloadAndResetError,
    returnToSignInAndResetError,
    goToContactUsAndResetError,
  };
};

export default useNavAndResetError;
