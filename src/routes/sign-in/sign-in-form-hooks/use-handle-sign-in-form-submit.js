import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectSignInFormSelectors } from "../../../store/sign-in-form/sign-in-form.slice";
import { signInAsync } from "../../../store/user/user.thunks";

import { validateEmail } from "../../../functions/validate-email";

import {
  invalidEmailErrorMessage,
  missingFieldsMessage,
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
} from "../../../strings/strings";

import { setProjectId } from "../../../functions/set-project-id";
import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";

const useHandleSignInFormSubmit = () => {
  const { fireSwal } = useFireSwal();

  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const dispatch = useDispatch();
  const { email, password, schoolCode } = signInFormDetails;

  const handleSignInFormSubmit = () => {
    if (!email || !password || !schoolCode) {
      fireSwal("error", missingFieldsMessage, "", 0, true, false);
    } else if (!validateEmail(email)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
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
      dispatch(signInAsync({ email, password, schoolCode }));
    }
  };

  return { handleSignInFormSubmit };
};

export default useHandleSignInFormSubmit;
