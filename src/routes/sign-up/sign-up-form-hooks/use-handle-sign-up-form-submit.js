import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectSignUpFormSelectors } from "../../../store/sign-up-form/sign-up-form.slice";
import { signUpAsync } from "../../../store/user/user.thunks";

import { validateEmail } from "../../../functions/validate-email";
import { setProjectId } from "../../../school-codes-list/get-ids-from-school-code/set-project-id";
import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";

import {
  invalidEmailErrorMessage,
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
  missingFieldsMessage,
  passwordsDontMatchMessage,
  phoneNumberLengthErrorMessage,
} from "../../../strings/strings";

const useHandleSignUpFormSubmit = () => {
  const { fireSwal } = useFireSwal();

  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);

  const dispatch = useDispatch();
  const { name, email, phoneNumber, schoolCode, password, confirmPassword } =
    signUpFormDetails;

  const handleSignUpFormSubmit = () => {
    if (!name || !email || !schoolCode || !password || !confirmPassword) {
      fireSwal("error", missingFieldsMessage, "", 0, true, false);
    } else if (!validateEmail(email)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
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
