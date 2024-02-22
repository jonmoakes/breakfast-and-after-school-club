import { useDispatch } from "react-redux";

import { setGenerateNewPasswordRequestEmail } from "../../../store/generate-new-password-request/generate-new-password-request.slice";

const useHandleForgotPasswordRequestEmailChange = () => {
  const dispatch = useDispatch();

  const handleForgotPasswordRequestEmailChange = (event) => {
    dispatch(setGenerateNewPasswordRequestEmail(event.target.value));
  };

  return { handleForgotPasswordRequestEmailChange };
};

export default useHandleForgotPasswordRequestEmailChange;
