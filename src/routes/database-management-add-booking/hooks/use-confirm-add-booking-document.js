// import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
// import useUpdateDocumentFunctions from "../../hooks/use-update-document-functions";
// import useUpdateDocumentVariables from "../../hooks/use-update-document-variables";
// import useUpdateDocumentSwals from "../../hooks/use-update-document-swals";
// import useShowInvalidEmailMessageSwal from "../../../../../hooks/use-show-invalid-email-message-swal";

// import {
//   confirmManuallyAddBookingToDatabase,
//   imSureMessage,
// } from "../../../../../strings/confirms/confirms-strings";

// import { validateEmail } from "../../../../../functions/validate-email";
// import useManuallyAddBookingDataAfterErrorThunk from "../../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-manually-add-booking-data-after-error-thunk";

// const useConfirmAddBookingDocument = () => {
//   const {
//     date,
//     sessionType,
//     childrenInBooking,
//     parentName,
//     parentPhoneNumber,
//     parentsUserId,
//     parentEmail,
//   } = useUpdateDocumentVariables();
//   const {
//     isNotValidDateFormat,
//     isNotValidSessionType,
//     parentNameOrChildrenInBookingIsEmpty,
//     stringHasUpperCaseLetters,
//     invalidDocumentIdLength,
//     valueStartsOrEndsWithSpace,
//   } = useUpdateDocumentFunctions();
//   const {
//     fireInvalidDateFormatSwal,
//     fireInvalidSessionTypeSwal,
//     fireCantHaveUppercaseCharactersSwal,
//     fireInvalidPhoneNumberSwal,
//     fireDocumentIdLengthErrorSwal,
//     fireWhiteSpaceErrorSwal,
//     fireEmptyValuesSwal,
//   } = useUpdateDocumentSwals();
//   const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
//   const { confirmSwal } = useConfirmSwal();
//   const { manuallyAddBookingDataAfterErrorThunk } =
//     useManuallyAddBookingDataAfterErrorThunk();

//   const confirmResult = () => {
//     const bookingData = {
//       date,
//       sessionType,
//       childrenInBooking,
//       parentName,
//       parentPhoneNumber,
//       parentsUserId,
//       parentEmail,
//     };
//     manuallyAddBookingDataAfterErrorThunk(bookingData);
//   };

//   const confirmAddBookingDocument = () => {
//     if (isNotValidDateFormat(date)) {
//       fireInvalidDateFormatSwal();
//     } else if (isNotValidSessionType(sessionType)) {
//       fireInvalidSessionTypeSwal();
//     } else if (
//       parentNameOrChildrenInBookingIsEmpty(parentName, childrenInBooking)
//     ) {
//       fireEmptyValuesSwal();
//     } else if (
//       stringHasUpperCaseLetters(childrenInBooking) ||
//       stringHasUpperCaseLetters(parentName) ||
//       stringHasUpperCaseLetters(parentsUserId) ||
//       stringHasUpperCaseLetters(parentEmail)
//     ) {
//       fireCantHaveUppercaseCharactersSwal();
//     } else if (parentPhoneNumber.length !== 11) {
//       fireInvalidPhoneNumberSwal();
//     } else if (invalidDocumentIdLength(parentsUserId)) {
//       fireDocumentIdLengthErrorSwal();
//     } else if (valueStartsOrEndsWithSpace(parentsUserId)) {
//       fireWhiteSpaceErrorSwal();
//     } else if (!validateEmail(parentEmail)) {
//       showInvalidEmailMessageSwal();
//     } else {
//       confirmSwal(confirmManuallyAddBookingToDatabase, "", imSureMessage, () =>
//         confirmResult()
//       );
//     }
//   };

//   return { confirmAddBookingDocument };
// };

// export default useConfirmAddBookingDocument;
