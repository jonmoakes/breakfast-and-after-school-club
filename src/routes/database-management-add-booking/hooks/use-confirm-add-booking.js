import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useManuallyAddBookingDataAfterErrorThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-manually-add-booking-data-after-error-thunk";

import {
  confirmManuallyAddBookingToDatabase,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

import { validateEmail } from "../../../functions/validate-email";

const useConfirmAddBookingDocument = () => {
  const {
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
  } = useGetDatabaseManagementSelectors();
  const {
    isNotValidDateFormat,
    isNotValidSessionType,
    stringHasUpperCaseLetters,
    invalidDocumentIdLength,
    valueStartsOrEndsWithSpace,
    invalidPhoneNumberLength,
  } = useUpdateDocumentFunctions();
  const {
    fireInvalidDateFormatSwal,
    fireInvalidSessionTypeSwal,
    fireCantHaveUppercaseCharactersExceptSessionSpacesSwal,
    fireInvalidPhoneNumberSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireEmptyValuesSwal,
  } = useUpdateDocumentSwals();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
  const { confirmSwal } = useConfirmSwal();
  const { manuallyAddBookingDataAfterErrorThunk } =
    useManuallyAddBookingDataAfterErrorThunk();

  const confirmResult = () => {
    const bookingData = {
      date,
      sessionType,
      childrenInBooking,
      parentName,
      parentPhoneNumber,
      parentsUserId,
      parentEmail,
    };
    manuallyAddBookingDataAfterErrorThunk(bookingData);
  };

  const confirmAddBookingDocument = () => {
    if (
      !date ||
      !sessionType ||
      !childrenInBooking ||
      !parentName ||
      !parentEmail ||
      !parentPhoneNumber ||
      !parentsUserId
    ) {
      fireEmptyValuesSwal();
    } else if (isNotValidDateFormat(date)) {
      fireInvalidDateFormatSwal();
    } else if (isNotValidSessionType(sessionType)) {
      fireInvalidSessionTypeSwal();
    } else if (
      stringHasUpperCaseLetters(childrenInBooking) ||
      stringHasUpperCaseLetters(parentName) ||
      stringHasUpperCaseLetters(parentsUserId) ||
      stringHasUpperCaseLetters(parentEmail)
    ) {
      fireCantHaveUppercaseCharactersExceptSessionSpacesSwal();
    } else if (invalidPhoneNumberLength(parentPhoneNumber)) {
      fireInvalidPhoneNumberSwal();
    } else if (invalidDocumentIdLength(parentsUserId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (valueStartsOrEndsWithSpace(parentsUserId)) {
      fireWhiteSpaceErrorSwal();
    } else if (!validateEmail(parentEmail)) {
      showInvalidEmailMessageSwal();
    } else {
      confirmSwal(confirmManuallyAddBookingToDatabase, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  return { confirmAddBookingDocument };
};

export default useConfirmAddBookingDocument;
