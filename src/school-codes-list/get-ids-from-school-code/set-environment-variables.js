import { schoolCodesList } from "../school-codes-list";

const { testSchool, cleveleysPrimary } = schoolCodesList;

export const setEnvironmentVariables = (schoolCode) => {
  switch (schoolCode) {
    case testSchool:
      return {
        projectId: import.meta.env.VITE_TEST_SCHOOL_PROJECT_ID,
        databaseId: import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        stripePublishableKey: import.meta.env
          .VITE_STRIPE_TEST_SCHOOL_PUBLISHABLE_KEY,
        stripeSecretKey: import.meta.env.VITE_STRIPE_TEST_SCHOOL_SECRET_KEY,
        appOwnerEmail: import.meta.env.VITE_TEST_SCHOOL_SCHOOL_EMAIL,
        appOwnerId: import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID,
        userCollectionId: import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
        termDatesCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_TERM_DATES_COLLECTION_ID,
        earlyFinishDatesCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_EARLY_FINISH_DATES_COLLECTION_ID,
        bookingClosingTimesCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_BOOKING_CLOSING_TIMES_COLLECTION_ID,
        bookingClosingTimesDocumentId: import.meta.env
          .VITE_TEST_SCHOOL_BOOKING_CLOSING_TIMES_DOCUMENT_ID,
        sessionPricesCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_SESSION_PRICES_COLLECTION_ID,
        sessionPricesDocumentId: import.meta.env
          .VITE_TEST_SCHOOL_SESSION_PRICES_DOCUMENT_ID,
        sessionTimesCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_SESSION_TIMES_COLLECTION_ID,
        sessionTimesDocumentId: import.meta.env
          .VITE_TEST_SCHOOL_SESSION_TIMES_DOCUMENT_ID,
        childrenCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_CHILDREN_COLLECTION_ID,
        bookedSessionsCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_BOOKED_SESSIONS_COLLECTION_ID,
        schoolLogoUrl: import.meta.env.VITE_TEST_SCHOOL_LOGO_URL,
      };
    case cleveleysPrimary:
      return {
        projectId: import.meta.env.VITE_CLEVELEYS_PRIMARY_PROJECT_ID,
        databaseId: import.meta.env.VITE_CLEVELEYS_PRIMARY_DATABASE_ID,
        stripePublishableKey: import.meta.env
          .VITE_STRIPE_CLEVELEYS_PRIMARY_PUBLISHABLE_KEY,
        stripeSecretKey: import.meta.env
          .VITE_STRIPE_CLEVELEYS_PRIMARY_SECRET_KEY,
        appOwnerEmail: import.meta.env.VITE_CLEVELEYS_PRIMARY_SCHOOL_EMAIL,
        appOwnerId: import.meta.env.VITE_CLEVELEYS_PRIMARY_APP_OWNER_ID,
        userCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_USER_COLLECTION_ID,
        termDatesCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_TERM_DATES_COLLECTION_ID,
        earlyFinishDatesCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_EARLY_FINISH_DATES_COLLECTION_ID,
        bookingClosingTimesCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_BOOKING_CLOSING_TIMES_COLLECTION_ID,
        bookingClosingTimesDocumentId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_BOOKING_CLOSING_TIMES_DOCUMENT_ID,
        sessionPricesCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_SESSION_PRICES_COLLECTION_ID,
        sessionPricesDocumentId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_SESSION_PRICES_DOCUMENT_ID,
        sessionTimesCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_SESSION_TIMES_COLLECTION_ID,
        sessionTimesDocumentId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_SESSION_TIMES_DOCUMENT_ID,
        childrenCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_CHILDREN_COLLECTION_ID,
        bookedSessionsCollectionId: import.meta.env
          .VITE_CLEVELEYS_PRIMARY_BOOKED_SESSIONS_COLLECTION_ID,
        schoolLogoUrl: import.meta.env.VITE_CLEVELEYS_PRIMARY_LOGO_URL,
      };
    default:
      return {};
  }
};
