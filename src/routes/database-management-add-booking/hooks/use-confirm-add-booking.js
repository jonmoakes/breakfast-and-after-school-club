import useAddBookingAndDeductSessionSpacesThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/add-booking/use-add-booking-and-deduct-session-spaces";
import useAddBookingUpdateBalanceDeductSessionSpacesThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/add-booking/use-add-booking-update-balance-deduct-session-spaces";
import useAddBookingDataThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/add-booking/use-add-booking-data-thunk";
import useDbManageAddBookingVariables from "./use-db-manage-add-booking-variables";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";

import {
  confirmManuallyAddBookingToDatabase,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

import { validateEmail } from "../../../functions/validate-email";
import { getNumberOfChildrenInBooking } from "../../../functions/get-number-of-children-in-booking";

const useConfirmAddBookingDocument = () => {
  const { userOfAppChoice, errorId } = useDbManageAddBookingVariables();
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

  const { addBookingDataThunk } = useAddBookingDataThunk();
  const { addBookingAndDeductSessionSpacesThunk } =
    useAddBookingAndDeductSessionSpacesThunk();
  const { addBookingUpdateBalanceDeductSessionSpacesThunk } =
    useAddBookingUpdateBalanceDeductSessionSpacesThunk();

  const confirmResult = (
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    refundPrice
  ) => {
    const bookingData = {
      date,
      sessionType,
      childrenInBooking,
      parentName,
      parentPhoneNumber,
      parentsUserId,
      parentEmail,
    };

    const numberOfChildrenInBooking =
      getNumberOfChildrenInBooking(childrenInBooking);

    if (userOfAppChoice === "non user") {
      addBookingAndDeductSessionSpacesThunk(
        bookingData,
        numberOfChildrenInBooking
      );
    } else if (userOfAppChoice === "user") {
      addBookingUpdateBalanceDeductSessionSpacesThunk(
        bookingData,
        refundPrice,
        numberOfChildrenInBooking
      );
    } else if (errorId === "2") {
      addBookingDataThunk(bookingData);
    }
  };

  const confirmAddBookingDocument = (
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    refundPrice
  ) => {
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
        confirmResult(
          date,
          sessionType,
          childrenInBooking,
          parentName,
          parentPhoneNumber,
          parentsUserId,
          parentEmail,
          refundPrice
        )
      );
    }
  };

  return { confirmAddBookingDocument };
};

export default useConfirmAddBookingDocument;
