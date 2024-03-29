import { useDispatch } from "react-redux";

import {
  resetCurrentUserErrorMessage,
  resetCurrentUserWalletBalanceError,
  resetCurrentUserWalletBalanceResult,
  setSchoolCodeForSocialLogin,
} from "../../../store/user/user.slice";

const useCurrentUserActions = () => {
  const dispatch = useDispatch();

  const dispatchResetCurrentUserErrorMessage = () => {
    dispatch(resetCurrentUserErrorMessage());
  };

  const dispatchResetCurrentUserWalletBalanceResult = () => {
    dispatch(resetCurrentUserWalletBalanceResult());
  };

  const dispatchResetCurrentUserWalletBalanceError = () => {
    dispatch(resetCurrentUserWalletBalanceError());
  };

  const dispatchSetSchoolCodeForSocialLogin = (event) => {
    dispatch(setSchoolCodeForSocialLogin(event.target.value));
  };

  return {
    dispatchResetCurrentUserErrorMessage,
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
    dispatchSetSchoolCodeForSocialLogin,
  };
};

export default useCurrentUserActions;
