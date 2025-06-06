export const INITIAL_STATE = {
  databaseManagementIsLoading: false,

  newMorningBookingClosingTime: "",
  newAfternoonBookingClosingTime: "",
  bookingClosingTimeResult: "",
  bookingClosingTimeError: null,

  newMorningSessionTime: "",
  newAfternoonShortSessionTime: "",
  newAfternoonLongSessionTime: "",
  sessionTimeResult: "",
  sessionTimeError: null,

  newMorningSessionPrice: "",
  newAfternoonShortSessionPrice: "",
  newAfternoonLongSessionPrice: "",
  newMorningAndAfternoonShortSessionPrice: "",
  newMorningAndAfternoonLongSessionPrice: "",
  sessionPricesResult: "",
  sessionPricesError: "",

  dataToUpdateDocument: {},
  updateBalanceResult: "",
  updateBalanceError: null,
  addBookingResult: "",
  addBookingError: null,
  updateSessionSpacesResult: "",
  updateSessionSpacesError: null,
  errorId: "",
  deleteDocumentResult: "",
  deleteDocumentError: null,
  createUserDocumentResult: "",
  createUserDocumentError: null,
  createChildDocumentResult: "",
  createChildDocumentError: null,
  userHasDeletedAllChildren: false,
  bookingToCancelDetails: {},
  userOfAppChoice: null,
  updateBookingEmailsResult: "",
  updateBookingEmailsError: null,
  updateChildrensListEmailResult: "",
  updateChildrensListEmailError: null,
  passwordForDbAccessResult: "",
};
