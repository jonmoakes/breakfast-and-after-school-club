import useGetSignUpFormSelectors from "../../../hooks/get-selectors/use-get-sign-up-form-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useSignUpThunk from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-sign-up-thunk";

import { validateEmail } from "../../../functions/validate-email";
import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";

import {
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
  missingFieldsMessage,
  passwordsDontMatchMessage,
  phoneNumberLengthErrorMessage,
} from "../../../strings/errors/errors-strings";
import {
  confirmSignUpMessage,
  sureSignUpMessage,
  yesSignUpMessage,
} from "../../../strings/confirms/confirms-strings";

const useHandleSignUpFormSubmit = () => {
  const { name, email, phoneNumber, schoolCode, password, confirmPassword } =
    useGetSignUpFormSelectors();
  const { signUpThunk } = useSignUpThunk();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const confirmResult = () => {
    signUpThunk();
  };

  const confirmSignUp = () => {
    confirmSwal(
      sureSignUpMessage,
      confirmSignUpMessage(),
      yesSignUpMessage,
      () => confirmResult()
    );
  };

  const handleSignUpFormSubmit = () => {
    if (!name || !email || !schoolCode || !password || !confirmPassword) {
      fireSwal("error", missingFieldsMessage, "", 0, true, false);
    } else if (!validateEmail(email)) {
      showInvalidEmailMessageSwal();
    } else if (phoneNumber.length !== 11) {
      fireSwal("error", phoneNumberLengthErrorMessage, "", 0, true, false);
    } else if (password !== confirmPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
    } else if (isNotValidSchoolCode(schoolCode)) {
      fireSwal(
        "error",
        invalidSchoolCode,
        invalidSchoolCodeHelpMessage,
        0,
        true,
        false
      );
    } else {
      confirmSignUp();
    }
  };

  return { handleSignUpFormSubmit };
};

export default useHandleSignUpFormSubmit;
