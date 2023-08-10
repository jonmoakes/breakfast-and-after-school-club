import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signInWithSocialAsync } from "../../../store/user/user.actions";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { resetErrorMessage } from "../../../store/user/user.slice";
import { contactRoute, signInRoute } from "../../../strings/strings";

const useGetSocialLoginResult = () => {
  const currentUser = useSelector(selectCurrentUser);
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

  useEffect(() => {
    if (currentUser) return;
    dispatch(signInWithSocialAsync());
  }, [dispatch, currentUser]);

  return {
    reloadAndResetError,
    returnToSignInAndResetError,
    goToContactUsAndResetError,
  };
};

export default useGetSocialLoginResult;
