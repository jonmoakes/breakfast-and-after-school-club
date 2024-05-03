import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useDeleteChildAndUserDocumentThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-delete-child-and-user-document-thunk";

import {
  confirmDeleteChildDocument,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteChild = () => {
  const { childToDeleteDocumentId } = useGetDatabaseManagementSelectors();
  const { deleteChildThunk } = useDeleteChildAndUserDocumentThunk();
  const {
    invalidDocumentIdLength,
    stringHasUpperCaseLetters,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();
  const {
    fireDeleteUserUppercaseCharactersSwal,
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
      fireDeleteUserUppercaseCharactersSwal();
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
