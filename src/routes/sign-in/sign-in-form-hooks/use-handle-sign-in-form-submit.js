import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectSignInFormSelectors } from "../../../store/sign-in-form/sign-in-form.slice";
import { signInAsync } from "../../../store/user/user.thunks";

import { validateEmail } from "../../../functions/validate-email";

import {
  missingFieldsMessage,
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
} from "../../../strings/errors/errors-strings";

import { setProjectId } from "../../../school-codes-list/get-ids-from-school-code/set-project-id";
import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

const useHandleSignInFormSubmit = () => {
  const { fireSwal } = useFireSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const dispatch = useDispatch();
  const { email, password, schoolCode } = signInFormDetails;

  const handleSignInFormSubmit = () => {
    if (!email || !password || !schoolCode) {
      fireSwal("error", missingFieldsMessage, "", 0, true, false);
    } else if (!validateEmail(email)) {
      showInvalidEmailMessageSwal();
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
