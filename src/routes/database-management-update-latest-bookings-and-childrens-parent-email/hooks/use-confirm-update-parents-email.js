import useUpdateLatestBookingsAndChildrensListWithNewEmailThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-latest-bookings-and-childrens-list-with-new-email-thunk";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import { imSureMessage } from "../../../strings/confirms/confirms-strings";

import { validateEmail } from "../../../functions/validate-email";

const useConfirmUpdateParentsEmail = () => {
  const { updateLatestBookingsAndChildrensListWithNewEmailThunk } =
    useUpdateLatestBookingsAndChildrensListWithNewEmailThunk();
  const {
    stringHasUpperCaseLetters,
    invalidDocumentIdLength,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();

  const {
    fireCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
  } = useUpdateDocumentSwals();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const { confirmSwal } = useConfirmSwal();

  const confirmResult = (parentsUserId, parentEmail) => {
    updateLatestBookingsAndChildrensListWithNewEmailThunk(
      parentsUserId,
      parentEmail
    );
  };

  const confirmUpdateParentsEmail = (parentsUserId, parentEmail) => {
    if (stringHasUpperCaseLetters(parentsUserId)) {
      fireCantHaveUppercaseCharactersSwal();
    } else if (invalidDocumentIdLength(parentsUserId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (valueStartsOrEndsWithSpace(parentsUserId)) {
      fireWhiteSpaceErrorSwal();
    } else if (!validateEmail(parentEmail)) {
      showInvalidEmailMessageSwal();
    } else {
      confirmSwal(
        "are you sure you wish to update the users email in the bookings and children list tables?",
        "",
        imSureMessage,
        () => confirmResult(parentsUserId, parentEmail)
      );
    }
  };

  return { confirmUpdateParentsEmail };
};

export default useConfirmUpdateParentsEmail;
