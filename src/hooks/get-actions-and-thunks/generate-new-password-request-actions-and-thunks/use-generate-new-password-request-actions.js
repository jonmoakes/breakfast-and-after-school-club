import { useDispatch } from "react-redux";

import {
  resetGenerateNewPasswordRequestState,
  setGenerateNewPasswordRequestEmail,
} from "../../../store/generate-new-password-request/generate-new-password-request.slice";

const useGenerateNewPasswordRequestActions = () => {
  const dispatch = useDispatch();

  const dispatchSetGenerateNewPasswordRequestEmailChange = (event) => {
    dispatch(setGenerateNewPasswordRequestEmail(event.target.value));
  };

  const dispatchResetGenerateNewPasswordRequestState = () => {
    dispatch(resetGenerateNewPasswordRequestState());
  };

  return {
    dispatchSetGenerateNewPasswordRequestEmailChange,
    dispatchResetGenerateNewPasswordRequestState,
  };
};

export default useGenerateNewPasswordRequestActions;
