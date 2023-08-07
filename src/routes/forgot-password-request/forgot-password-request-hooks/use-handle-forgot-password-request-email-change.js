import { useDispatch } from "react-redux";

import { setForgotPasswordRequestEmail } from "../../../store/forgot-password-request/forgot-password-request.slice";

const useHandleForgotPasswordRequestEmailChange = () => {
  const dispatch = useDispatch();

  const handleForgotPasswordRequestEmailChange = (event) => {
    dispatch(setForgotPasswordRequestEmail(event.target.value));
  };

  return { handleForgotPasswordRequestEmailChange };
};

export default useHandleForgotPasswordRequestEmailChange;
