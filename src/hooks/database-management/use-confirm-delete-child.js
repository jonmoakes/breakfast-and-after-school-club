import useConfirmSwal from "../use-confirm-swal";
import useUpdateDocumentFunctions from "./use-update-document-functions";
import useUpdateDocumentSwals from "./use-update-document-swals";
import useGetDatabaseManagementSelectors from "../get-selectors/use-get-database-management-selectors";
import useDeleteChildAndUserDocumentThunk from "../get-actions-and-thunks/database-management-actions-and-thunks/use-delete-child-and-user-document-thunk";

import {
  confirmDeleteChildDocument,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";

// this hook is used for deleting a singular child, or as part of deleting a user when they requests it, so is shared.
const useConfirmDeleteChild = () => {
  const { childToDeleteDocumentId } = useGetDatabaseManagementSelectors();
  const { deleteChildThunk } = useDeleteChildAndUserDocumentThunk();
  const {
    invalidDocumentIdLength,
    stringHasUpperCaseLetters,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();
  const {
    fireCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
  } = useUpdateDocumentSwals();

  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    deleteChildThunk(childToDeleteDocumentId);
  };

  const confirmDeleteChild = () => {
    if (invalidDocumentIdLength(childToDeleteDocumentId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (stringHasUpperCaseLetters(childToDeleteDocumentId)) {
      fireCantHaveUppercaseCharactersSwal();
    } else if (valueStartsOrEndsWithSpace(childToDeleteDocumentId)) {
      fireWhiteSpaceErrorSwal();
    } else {
      confirmSwal(confirmDeleteChildDocument, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  return { confirmDeleteChild };
};

export default useConfirmDeleteChild;
