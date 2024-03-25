import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { generateNewPasswordRequestAsync } from "../../../store/generate-new-password-request/generate-new-password-request.thunks";

import {
  imSureMessage,
  sureResetPasswordMessage,
} from "../../../strings/confirms/confirms-strings";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const useConfirmUpdatePassword = () => {
  const { email } = useGetCurrentUserSelectors();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

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
