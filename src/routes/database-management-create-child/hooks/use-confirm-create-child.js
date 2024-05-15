import useCreateChildDocumentThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-create-child-document-thunk";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";

import {
  confirmAddChildMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

import { validateEmail } from "../../../functions/validate-email";

const useConfirmCreateChild = () => {
  const { createChildDocumentThunk } = useCreateChildDocumentThunk();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
  const {
    invalidPhoneNumberLength,
    invalidDocumentIdLength,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();
  const {
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireInvalidPhoneNumberSwal,
    nameCantIncludeCommaSwal,
  } = useUpdateDocumentSwals();

  const confirmResult = (
    childAge,
    childName,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
    parentName,
    parentEmail,
    parentPhoneNumber,
    parentsUserId
  ) => {
    createChildDocumentThunk(
      childAge,
      childName,
      consent,
      medicalInfo,
      dietryRequirements,
      additionalInfo,
      parentName,
      parentEmail,
      parentPhoneNumber,
      parentsUserId
    );
  };

  const confirmCreateChild = (
    childAge,
    childName,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
    parentName,
    parentEmail,
    parentPhoneNumber,
    parentsUserId
  ) => {
    if (childName.includes(",") || parentName.includes(",")) {
      nameCantIncludeCommaSwal();
    } else if (!validateEmail(parentEmail)) {
      showInvalidEmailMessageSwal();
    } else if (invalidPhoneNumberLength(parentPhoneNumber)) {
      fireInvalidPhoneNumberSwal();
    } else if (invalidDocumentIdLength(parentsUserId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (valueStartsOrEndsWithSpace(parentsUserId)) {
      fireWhiteSpaceErrorSwal();
    } else {
      confirmSwal(confirmAddChildMessage, "", imSureMessage, () =>
        confirmResult(
          childAge,
          childName,
          consent,
          medicalInfo,
          dietryRequirements,
          additionalInfo,
          parentName,
          parentEmail,
          parentPhoneNumber,
          parentsUserId
        )
      );
    }
  };

  return { confirmCreateChild };
};

export default useConfirmCreateChild;
