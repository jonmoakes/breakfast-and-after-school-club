import useUpdateUsersBalanceThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-users-balance-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";

import {
  confirmUpdateUserBalanceMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";

const useConfirmUpdateUserBalance = () => {
  const { updateUsersBalanceThunk } = useUpdateUsersBalanceThunk();
  const { usersDocumentId, refundPrice } = useGetDatabaseManagementSelectors();
  const {
    stringHasUpperCaseLetters,
    invalidDocumentIdLength,
    invalidUpdateBalanceLength,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();
  const {
    fireEmptyValuesSwal,
    fireCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireRefundPriceLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
  } = useUpdateDocumentSwals();
  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    updateUsersBalanceThunk(usersDocumentId, refundPrice);
  };

  const confirmUpdateUserBalance = () => {
    if (!usersDocumentId || !refundPrice) {
      fireEmptyValuesSwal();
    } else if (invalidDocumentIdLength(usersDocumentId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (stringHasUpperCaseLetters(usersDocumentId)) {
      fireCantHaveUppercaseCharactersSwal();
    } else if (
      valueStartsOrEndsWithSpace(usersDocumentId) ||
      valueStartsOrEndsWithSpace(refundPrice)
    ) {
      fireWhiteSpaceErrorSwal();
    } else if (invalidUpdateBalanceLength(refundPrice)) {
      fireRefundPriceLengthErrorSwal();
    } else {
      confirmSwal(confirmUpdateUserBalanceMessage, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  return { confirmUpdateUserBalance };
};

export default useConfirmUpdateUserBalance;
