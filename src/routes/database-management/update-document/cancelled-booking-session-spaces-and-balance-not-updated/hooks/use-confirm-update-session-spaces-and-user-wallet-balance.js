import useUpdateWalletBalanceAndSessionSpacesThunk from "../../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-wallet-balance-and-session-spaces-thunk";
import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../hooks/use-update-document-functions";
import useUpdateDocumentVariables from "../../hooks/use-update-document-variables";
import useUpdateDocumentSwals from "../../hooks/use-update-document-swals";

import {
  // confirmUpdateUserBalanceMessage,
  imSureMessage,
} from "../../../../../strings/confirms/confirms-strings";

const useConfirmUpdateSessionSpacesAndUserWalletBalance = () => {
  const { updateWalletBalanceAndSessionSpacesThunk } =
    useUpdateWalletBalanceAndSessionSpacesThunk();
  const {
    date,
    sessionType,
    numberOfChildrenInBooking,
    usersDocumentId,
    refundPrice,
  } = useUpdateDocumentVariables();
  const {
    isNotValidDateFormat,
    isNotValidSessionType,
    isNotValidNumberOfChildrenValue,
    invalidDocumentIdLength,
    formHasWhiteSpaceValues,
    invalidRefundPriceLength,
    stringHasUpperCaseLetters,
  } = useUpdateDocumentFunctions();
  const {
    fireInvalidDateFormatSwal,
    fireInvalidSessionTypeSwal,
    fireInvalidNumberOfChildrenSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireRefundPriceLengthErrorSwal,
    fireCantHaveUppercaseCharactersSwal,
    fireEmptyValuesSwal,
  } = useUpdateDocumentSwals();
  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    updateWalletBalanceAndSessionSpacesThunk(
      usersDocumentId,
      refundPrice,
      numberOfChildrenInBooking,
      date,
      sessionType
    );
  };

  const confirmUpdateSessionSpacesAndUserWalletBalance = () => {
    if (isNotValidDateFormat(date)) {
      fireInvalidDateFormatSwal();
    } else if (isNotValidSessionType(sessionType)) {
      fireInvalidSessionTypeSwal();
    } else if (isNotValidNumberOfChildrenValue()) {
      fireInvalidNumberOfChildrenSwal();
    } else if (invalidDocumentIdLength(usersDocumentId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (formHasWhiteSpaceValues(usersDocumentId)) {
      fireWhiteSpaceErrorSwal();
    } else if (invalidRefundPriceLength()) {
      fireRefundPriceLengthErrorSwal();
    } else if (stringHasUpperCaseLetters(usersDocumentId)) {
      fireCantHaveUppercaseCharactersSwal();
    } else if (!refundPrice) {
      fireEmptyValuesSwal();
    } else {
      confirmSwal("are you sure?", "", imSureMessage, () => confirmResult());
    }
  };

  return { confirmUpdateSessionSpacesAndUserWalletBalance };
};

export default useConfirmUpdateSessionSpacesAndUserWalletBalance;
