import { useDispatch } from "react-redux";

import useGetSignUpFormSelectors from "../../../hooks/get-selectors/use-get-sign-up-form-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import { signUpAsync } from "../../../store/user/user.thunks";

import { validateEmail } from "../../../functions/validate-email";
import { setProjectId } from "../../../school-codes-list/get-ids-from-school-code/set-project-id";
import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";

import {
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
  missingFieldsMessage,
  passwordsDontMatchMessage,
  phoneNumberLengthErrorMessage,
} from "../../../strings/errors/errors-strings";

const useHandleSignUpFormSubmit = () => {
  const { name, email, phoneNumber, schoolCode, password, confirmPassword } =
    useGetSignUpFormSelectors();
  const { fireSwal } = useFireSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

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
      setProjectId(schoolCode);
      dispatch(signUpAsync({ email, password, name, schoolCode, phoneNumber }));
    }
  };

  return { handleSignUpFormSubmit };
};

export default useHandleSignUpFormSubmit;
