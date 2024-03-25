import { useDispatch } from "react-redux";

import useGetGenerateNewPasswordRequestSelectors from "../../../hooks/get-selectors/use-get-generate-new-password-request-selectors";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import { generateNewPasswordRequestAsync } from "../../../store/generate-new-password-request/generate-new-password-request.thunks";

import { validateEmail } from "../../../functions/validate-email";

const useCheckForValidEmailAndSendRequest = () => {
  const { generateNewPasswordRequestEmail } =
    useGetGenerateNewPasswordRequestSelectors();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

  const checkForValidEmailAndSendRequest = () => {
    if (!validateEmail(generateNewPasswordRequestEmail)) {
      showInvalidEmailMessageSwal();
      return;
    } else {
      dispatch(
        generateNewPasswordRequestAsync({ generateNewPasswordRequestEmail })
      );
    }
  };

  return { checkForValidEmailAndSendRequest };
};

export default useCheckForValidEmailAndSendRequest;
