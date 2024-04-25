import useUpdateUsersBalanceAfterErrorEmailThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-users-balance-after-error-email-thunk";
import useUpdateDocumentVariables from "./use-update-document-variables";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "./use-update-document-functions";

import useUpdateDocumentSwals from "./use-update-document-swals";

import {
  confirmUpdateUserBalanceMessage,
  imSureMessage,
} from "../../../../strings/confirms/confirms-strings";

const useConfirmUpdateUserBalance = () => {
  const { updateUsersBalanceAfterErrorEmailThunk } =
    useUpdateUsersBalanceAfterErrorEmailThunk();
  const { documentId, refundPrice } = useUpdateDocumentVariables();
  const {
    formHasEmptyValue,
    invalidDocumentIdLength,
    invalidRefundPriceLength,
    formHasWhiteSpaceValues,
  } = useUpdateDocumentFunctions();
  const {
    fireEmptyValuesSwal,
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
