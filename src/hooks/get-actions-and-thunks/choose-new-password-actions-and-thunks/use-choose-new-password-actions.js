import { useDispatch } from "react-redux";

import useGetChooseNewPasswordSelectors from "../../get-selectors/use-get-choose-new-password-selectors";

import {
  resetChooseNewPasswordState,
  resetPasswordResultError,
  setNewPasswordDetails,
} from "../../../store/choose-new-password/choose-new-password.slice";

const useChooseNewPasswordActions = () => {
  const { newPasswordDetails } = useGetChooseNewPasswordSelectors();

  const dispatch = useDispatch();

  const dispatchHandleChooseNewPasswordFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setNewPasswordDetails({ ...newPasswordDetails, [name]: value }));
  };

  const dispatchResetPasswordResultError = () => {
    dispatch(resetPasswordResultError());
  };

  const dispatchResetChooseNewPasswordState = () => {
    dispatch(resetChooseNewPasswordState());
  };

  return {
    dispatchHandleChooseNewPasswordFormChange,
    dispatchResetPasswordResultError,
    dispatchResetChooseNewPasswordState,
  };
};

export default useChooseNewPasswordActions;
