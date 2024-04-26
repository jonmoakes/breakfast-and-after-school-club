import useUpdateUsersBalanceAfterErrorEmailThunk from "../../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-users-balance-after-error-email-thunk";
import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../hooks/use-update-document-functions";
import useUpdateDocumentVariables from "../../hooks/use-update-document-variables";
import useUpdateDocumentSwals from "../../hooks/use-update-document-swals";

import {
  confirmUpdateUserBalanceMessage,
  imSureMessage,
} from "../../../../../strings/confirms/confirms-strings";

const useConfirmUpdateUserBalance = () => {
  const { updateUsersBalanceAfterErrorEmailThunk } =
    useUpdateUsersBalanceAfterErrorEmailThunk();
  const { documentId, refundPrice } = useUpdateDocumentVariables();
  const {
    formHasEmptyValue,
    documentIdHasUpperCaseLetters,
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
    updateUsersBalanceAfterErrorEmailThunk(documentId, refundPrice);
  };

  const confirmUpdateUserBalance = () => {
    if (formHasEmptyValue()) {
      fireEmptyValuesSwal();
    } else if (documentIdHasUpperCaseLetters(documentId)) {
      fireCantHaveUppercaseCharactersSwal();
    } else if (invalidDocumentIdLength()) {
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
