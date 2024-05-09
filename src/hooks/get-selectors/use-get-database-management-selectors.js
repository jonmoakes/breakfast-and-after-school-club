import { useSelector } from "react-redux";

import { selectDatabaseManagementSelectors } from "../../store/database-management/database-management.slice";

const useGetDatabaseManagementSelectors = () => {
  const {
    databaseManagementIsLoading,

    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    bookingClosingTimeResult,
    bookingClosingTimeError,

    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
    sessionTimeResult,
    sessionTimeError,

    newMorningSessionPrice,
    newAfternoonShortSessionPrice,
    newAfternoonLongSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
    sessionPricesResult,
    sessionPricesError,

    dataToUpdateDocument,
    updateBalanceResult,
    updateBalanceError,
    addBookingResult,
    addBookingError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    errorId,
    userHasDeletedAllChildren,
    deleteDocumentResult,
    deleteDocumentError,
    bookingToCancelDetails,
    userOfAppChoice,
  } = useSelector(selectDatabaseManagementSelectors);

  const {
    refundPrice,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    numberOfChildrenInBooking,
    usersDocumentId,
    childToDeleteDocumentId,
    userToDeleteDocumentId,
    bookingId,
  } = dataToUpdateDocument ?? {};

  const { sessionDate, sessionChildren, typeOfSession, userIdOfParent } =
    bookingToCancelDetails ?? {};

  return {
    databaseManagementIsLoading,

    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    bookingClosingTimeResult,
    bookingClosingTimeError,

    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
    sessionTimeResult,
    sessionTimeError,

    newMorningSessionPrice,
    newAfternoonShortSessionPrice,
    newAfternoonLongSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
    sessionPricesResult,
    sessionPricesError,

    dataToUpdateDocument,
    updateBalanceResult,
    updateBalanceError,
    addBookingResult,
    addBookingError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    errorId,
    refundPrice,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    numberOfChildrenInBooking,
    usersDocumentId,
    userHasDeletedAllChildren,
    deleteDocumentResult,
    deleteDocumentError,
    childToDeleteDocumentId,
    userToDeleteDocumentId,
    bookingId,
    bookingToCancelDetails,
    sessionDate,
    sessionChildren,
    typeOfSession,
    userIdOfParent,
    userOfAppChoice,
  };
};

export default useGetDatabaseManagementSelectors;
