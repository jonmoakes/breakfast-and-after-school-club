import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useSignInThunk from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-sign-in-thunk";

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
  const { signInThunk } = useSignInThunk();
  const { fireSwal } = useFireSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

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
      signInThunk();
      // dispatch(signInAsync({ email, password, schoolCode }));
    }
  };

  return { handleSignInFormSubmit };
};

export default useHandleSignInFormSubmit;
