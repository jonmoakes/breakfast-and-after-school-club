import { useDispatch } from "react-redux";

import {
  hideResetPasswordConfirmPasswordIsVisible,
  hideResetPasswordIsVisible,
  hideSignInPasswordIsVisible,
  hideSignUpConfirmPasswordIsVisible,
  hideSignUpPasswordIsVisible,
  hideUpdateEmailPasswordIsVisible,
  resetPasswordIsVisibleState,
  toggleResetPasswordConfirmPasswordIsVisible,
  toggleResetPasswordIsVisible,
  toggleSignInPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  toggleSignUpPasswordIsVisible,
  toggleUpdateEmailPasswordIsVisible,
} from "../../store/password-is-visible/password-is-visible.slice";

const usePasswordIsVisibleActions = () => {
  const dispatch = useDispatch();

  const dispatchToggleSignInPasswordIsVisible = () => {
    dispatch(toggleSignInPasswordIsVisible());
  };

  const dispatchHideSignInPasswordIsVisible = () => {
    dispatch(hideSignInPasswordIsVisible());
  };

  const dispatchToggleSignUpPasswordIsVisible = () => {
    dispatch(toggleSignUpPasswordIsVisible());
  };

  const dispatchToggleSignUpConfirmPasswordIsVisible = () => {
    dispatch(toggleSignUpConfirmPasswordIsVisible());
  };

  const dispatchHideSignUpPasswordIsVisible = () => {
    dispatch(hideSignUpPasswordIsVisible());
  };

  const dispatchHideSignUpConfirmPasswordIsVisible = () => {
    dispatch(hideSignUpConfirmPasswordIsVisible());
  };

  const dispatchToggleResetPasswordIsVisible = () => {
    dispatch(toggleResetPasswordIsVisible());
  };

  const dispatchToggleResetPasswordConfirmPasswordIsVisible = () => {
    dispatch(toggleResetPasswordConfirmPasswordIsVisible());
  };

  const dispatchHideResetPasswordIsVisible = () => {
    dispatch(hideResetPasswordIsVisible());
  };

  const dispatchHideResetPasswordConfirmPasswordIsVisible = () => {
    dispatch(hideResetPasswordConfirmPasswordIsVisible());
  };

  const dispatchToggleUpdateEmailPasswordIsVisible = () => {
    dispatch(toggleUpdateEmailPasswordIsVisible());
  };

  const dispatchHideUpdateEmailPasswordIsVisible = () => {
    dispatch(hideUpdateEmailPasswordIsVisible());
  };

  const dispatchResetPasswordIsVisibleState = () => {
    dispatch(resetPasswordIsVisibleState());
  };

  return {
    dispatchToggleSignInPasswordIsVisible,
    dispatchHideSignInPasswordIsVisible,
    dispatchToggleSignUpPasswordIsVisible,
    dispatchToggleSignUpConfirmPasswordIsVisible,
    dispatchHideSignUpPasswordIsVisible,
    dispatchHideSignUpConfirmPasswordIsVisible,
    dispatchToggleResetPasswordIsVisible,
    dispatchToggleResetPasswordConfirmPasswordIsVisible,
    dispatchHideResetPasswordIsVisible,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
    dispatchToggleUpdateEmailPasswordIsVisible,
    dispatchHideUpdateEmailPasswordIsVisible,
    dispatchResetPasswordIsVisibleState,
  };
};

export default usePasswordIsVisibleActions;
