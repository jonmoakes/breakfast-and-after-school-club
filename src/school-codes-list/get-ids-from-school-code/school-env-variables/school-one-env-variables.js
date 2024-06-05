export const schoolOneEnvVariables = {
  databaseId: import.meta.env.VITE_SCHOOL_ONE_DATABASE_ID,

  stripePublishableKey: import.meta.env.VITE_STRIPE_SCHOOL_ONE_PUBLISHABLE_KEY,

  stripeSecretKey: import.meta.env.VITE_STRIPE_SCHOOL_ONE_SECRET_KEY,

  appOwnerEmail: import.meta.env.VITE_SCHOOL_ONE_APP_OWNER_EMAIL,

  appOwnerId: import.meta.env.VITE_SCHOOL_ONE_APP_OWNER_ID,

  userCollectionId: import.meta.env.VITE_SCHOOL_ONE_USER_COLLECTION_ID,

  termDatesCollectionId: import.meta.env
    .VITE_SCHOOL_ONE_TERM_DATES_COLLECTION_ID,

  earlyFinishDatesCollectionId: import.meta.env
    .VITE_SCHOOL_ONE_EARLY_FINISH_DATES_COLLECTION_ID,

  bookingClosingTimesCollectionId: import.meta.env
    .VITE_SCHOOL_ONE_BOOKING_CLOSING_TIMES_COLLECTION_ID,

  bookingClosingTimesDocumentId: import.meta.env
    .VITE_SCHOOL_ONE_BOOKING_CLOSING_TIMES_DOCUMENT_ID,

  sessionPricesCollectionId: import.meta.env
    .VITE_SCHOOL_ONE_SESSION_PRICES_COLLECTION_ID,

  sessionPricesDocumentId: import.meta.env
    .VITE_SCHOOL_ONE_SESSION_PRICES_DOCUMENT_ID,

  sessionTimesCollectionId: import.meta.env
    .VITE_SCHOOL_ONE_SESSION_TIMES_COLLECTION_ID,

  sessionTimesDocumentId: import.meta.env
    .VITE_SCHOOL_ONE_SESSION_TIMES_DOCUMENT_ID,

  childrenCollectionId: import.meta.env.VITE_SCHOOL_ONE_CHILDREN_COLLECTION_ID,

  bookedSessionsCollectionId: import.meta.env
    .VITE_SCHOOL_ONE_BOOKED_SESSIONS_COLLECTION_ID,

  schoolLogoUrl: import.meta.env.VITE_SCHOOL_ONE_LOGO_URL,
};
