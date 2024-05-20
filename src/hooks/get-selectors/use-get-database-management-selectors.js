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
    createUserDocumentResult,
    createUserDocumentError,
    createChildDocumentResult,
    createChildDocumentError,
    bookingToCancelDetails,
    userOfAppChoice,
    updateBookingEmailsResult,
    updateBookingEmailsError,
    updateChildrensListEmailResult,
    updateChildrensListEmailError,
  } = useSelector(selectDatabaseManagementSelectors);

  const {
    sessionPrice,
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

    //adding a child
    childName,
    childAge,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
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
    sessionPrice,
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
    createUserDocumentResult,
    createUserDocumentError,
    createChildDocumentResult,
    createChildDocumentError,
    childToDeleteDocumentId,
    userToDeleteDocumentId,
    bookingId,
    bookingToCancelDetails,
    sessionDate,
    sessionChildren,
    typeOfSession,
    userIdOfParent,
    userOfAppChoice,
    childName,
    childAge,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
    updateBookingEmailsResult,
    updateBookingEmailsError,
    updateChildrensListEmailResult,
    updateChildrensListEmailError,
  };
};

export default useGetDatabaseManagementSelectors;
