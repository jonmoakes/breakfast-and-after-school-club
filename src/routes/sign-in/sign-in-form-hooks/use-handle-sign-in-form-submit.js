import { useDispatch } from "react-redux";

import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";

import { signInAsync } from "../../../store/user/user.thunks";

import {
  missingFieldsMessage,
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
} from "../../../strings/errors/errors-strings";

import { setProjectId } from "../../../school-codes-list/get-ids-from-school-code/set-project-id";
import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";
import { validateEmail } from "../../../functions/validate-email";

const useHandleSignInFormSubmit = () => {
  const { email, password, schoolCode } = useGetSignInFormSelectors();
  const { fireSwal } = useFireSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

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
