import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useDeleteChildAndUserDocumentThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-delete-child-and-user-document-thunk";

import {
  confirmDeleteUserDocument,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteUser = () => {
  const { userToDeleteDocumentId } = useGetDatabaseManagementSelectors();
  const { deleteUserThunk } = useDeleteChildAndUserDocumentThunk();
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
    deleteUserThunk(userToDeleteDocumentId);
  };

  const confirmDeleteUser = () => {
    if (invalidDocumentIdLength(userToDeleteDocumentId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (stringHasUpperCaseLetters(userToDeleteDocumentId)) {
      fireDeleteUserUppercaseCharactersSwal();
    } else if (valueStartsOrEndsWithSpace(userToDeleteDocumentId)) {
      fireWhiteSpaceErrorSwal();
    } else {
      confirmSwal(confirmDeleteUserDocument, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  return { confirmDeleteUser };
};

export default useConfirmDeleteUser;
