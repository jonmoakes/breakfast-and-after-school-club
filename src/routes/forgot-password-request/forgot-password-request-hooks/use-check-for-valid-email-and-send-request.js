import useGenerateNewPasswordRequestThunk from "../../../hooks/get-actions-and-thunks/generate-new-password-request-actions-and-thunks/use-generate-new-password-request-thunk";
import useGetGenerateNewPasswordRequestSelectors from "../../../hooks/get-selectors/use-get-generate-new-password-request-selectors";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import { validateEmail } from "../../../functions/validate-email";

const useCheckForValidEmailAndSendRequest = () => {
  const { generateNewPasswordRequestEmail } =
    useGetGenerateNewPasswordRequestSelectors();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
  const { generateNewPasswordRequestThunk } =
    useGenerateNewPasswordRequestThunk();

  const checkForValidEmailAndSendRequest = () => {
    if (!validateEmail(generateNewPasswordRequestEmail)) {
      showInvalidEmailMessageSwal();
      return;
    } else {
      generateNewPasswordRequestThunk(generateNewPasswordRequestEmail);
    }
  };

  return { checkForValidEmailAndSendRequest };
};

export default useCheckForValidEmailAndSendRequest;
