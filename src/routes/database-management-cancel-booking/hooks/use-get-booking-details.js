import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";
import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

const useGetBookingDetails = () => {
  const { bookingId } = useGetDatabaseManagementSelectors();
  const { bookedSessionsOwner } = useGetBookedSessionsOwnerSelectors();
  const { dispatchSetBookingToCancelDetails } = useDatabaseManagementActions();

  const {
    stringHasUpperCaseLetters,
    invalidDocumentIdLength,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();
  const {
    fireCantHaveUppercaseCharactersExceptSessionSpacesSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireEmptyValuesSwal,
  } = useUpdateDocumentSwals();

  const getBookingDetails = () => {
    if (!bookingId) {
      fireEmptyValuesSwal();
    } else if (stringHasUpperCaseLetters(bookingId)) {
      fireCantHaveUppercaseCharactersExceptSessionSpacesSwal();
    } else if (invalidDocumentIdLength(bookingId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (valueStartsOrEndsWithSpace(bookingId)) {
      fireWhiteSpaceErrorSwal();
    } else {
      const bookingToCancelDetails = bookedSessionsOwner.find(
        (bookedSession) => bookedSession.$id === bookingId
      );

      if (bookingToCancelDetails) {
        const detailsOfSession = {
          sessionDate: bookingToCancelDetails.date,
          sessionChildren: bookingToCancelDetails.childrensName,
          typeOfSession: bookingToCancelDetails.sessionType,
          userIdOfParent: bookingToCancelDetails.parentsUserId,
        };
        dispatchSetBookingToCancelDetails(detailsOfSession);
      } else {
        alert("We Couldn't Find A Booking With That Id. Please Try Again.");
      }
    }
  };

  return { getBookingDetails };
};

export default useGetBookingDetails;
