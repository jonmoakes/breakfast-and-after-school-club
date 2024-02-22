import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { generateNewPasswordRequestAsync } from "../../../store/generate-new-password-request/generate-new-password-request.thunks";

import {
  imSureMessage,
  sureResetPasswordMessage,
} from "../../../strings/strings";

const useConfirmUpdatePassword = () => {
  const { confirmSwal } = useConfirmSwal();

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const { email } = currentUser;
  const confirmResult = () => {
    const generateNewPasswordRequestEmail = email;
    dispatch(
      generateNewPasswordRequestAsync({ generateNewPasswordRequestEmail })
    );
  };

  const confirmUpdatePassword = () => {
    confirmSwal(sureResetPasswordMessage, "", imSureMessage, confirmResult);
  };
  return { confirmUpdatePassword };
};

export default useConfirmUpdatePassword;
