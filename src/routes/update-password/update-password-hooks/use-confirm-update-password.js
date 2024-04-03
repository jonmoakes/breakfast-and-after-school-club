import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGenerateNewPasswordRequestThunk from "../../../hooks/get-actions-and-thunks/generate-new-password-request-actions-and-thunks/use-generate-new-password-request-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  imSureMessage,
  sureResetPasswordMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUpdatePassword = () => {
  const { email } = useGetCurrentUserSelectors();
  const { confirmSwal } = useConfirmSwal();
  const { generateNewPasswordRequestThunk } =
    useGenerateNewPasswordRequestThunk();

  const confirmResult = () => {
    const generateNewPasswordRequestEmail = email;
    generateNewPasswordRequestThunk(generateNewPasswordRequestEmail);
  };

  const confirmUpdatePassword = () => {
    confirmSwal(sureResetPasswordMessage, "", imSureMessage, confirmResult);
  };
  return { confirmUpdatePassword };
};

export default useConfirmUpdatePassword;
