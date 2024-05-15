import useCreateUserDocumentThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-create-user-document-thunk";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { phoneNumberLengthErrorMessage } from "../../../strings/errors/errors-strings";
import {
  confirmCreateUserMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

import { validateEmail } from "../../../functions/validate-email";

const useConfirmCreateUser = () => {
  const { createUserDocumentThunk } = useCreateUserDocumentThunk();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const confirmResult = (parentName, parentEmail, parentPhoneNumber) => {
    createUserDocumentThunk(parentName, parentEmail, parentPhoneNumber);
  };

  const confirmCreateUser = (parentName, parentEmail, parentPhoneNumber) => {
    if (!validateEmail(parentEmail)) {
      showInvalidEmailMessageSwal();
    } else if (parentPhoneNumber.length !== 11) {
      fireSwal("error", phoneNumberLengthErrorMessage, "", 0, true, false);
    } else {
      confirmSwal(confirmCreateUserMessage, "", imSureMessage, () =>
        confirmResult(parentName, parentEmail, parentPhoneNumber)
      );
    }
  };

  return { confirmCreateUser };
};

export default useConfirmCreateUser;
