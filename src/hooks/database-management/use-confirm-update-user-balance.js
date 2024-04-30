import useUpdateUsersBalanceAfterErrorEmailThunk from "../get-actions-and-thunks/database-management-actions-and-thunks/use-update-users-balance-after-error-email-thunk";
import useConfirmSwal from "../use-confirm-swal";
import useUpdateDocumentFunctions from "../database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../database-management/use-update-document-swals";

import {
  confirmUpdateUserBalanceMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import useGetDatabaseManagementSelectors from "../get-selectors/use-get-database-management-selectors";

const useConfirmUpdateUserBalance = () => {
  const { updateUsersBalanceAfterErrorEmailThunk } =
    useUpdateUsersBalanceAfterErrorEmailThunk();
  const { usersDocumentId, refundPrice } = useGetDatabaseManagementSelectors();
  const {
    formHasEmptyValue,
    stringHasUpperCaseLetters,
    invalidDocumentIdLength,
    invalidRefundPriceLength,
    formHasWhiteSpaceValues,
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
    updateUsersBalanceAfterErrorEmailThunk(usersDocumentId, refundPrice);
  };

  const confirmUpdateUserBalance = () => {
    if (formHasEmptyValue()) {
      fireEmptyValuesSwal();
    } else if (stringHasUpperCaseLetters(usersDocumentId)) {
      fireCantHaveUppercaseCharactersSwal();
    } else if (invalidDocumentIdLength(usersDocumentId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (invalidRefundPriceLength()) {
      fireRefundPriceLengthErrorSwal();
    } else if (formHasWhiteSpaceValues()) {
      fireWhiteSpaceErrorSwal();
    } else {
      confirmSwal(confirmUpdateUserBalanceMessage, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  return { confirmUpdateUserBalance };
};

export default useConfirmUpdateUserBalance;
