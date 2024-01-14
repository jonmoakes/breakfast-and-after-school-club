import { schoolCodesList } from "../school-codes-list/school-codes-list";

export const setEnvironmentVariables = (schoolCode) => {
  const { manorBeach } = schoolCodesList;

  switch (schoolCode) {
    case manorBeach:
      return {
        projectId: import.meta.env.VITE_MANOR_BEACH_PROJECT_ID,
        databaseId: import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
        appOwnerEmail: import.meta.env.VITE_MANOR_BEACH_SCHOOL_EMAIL,
        appOwnerId: import.meta.env.VITE_MANOR_BEACH_APP_OWNER_ID,
        userCollectionId: import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
        termDatesCollectionId: import.meta.env
          .VITE_MANOR_BEACH_TERM_DATES_COLLECTION_ID,
        sessionPricesCollectionId: import.meta.env
          .VITE_MANOR_BEACH_SESSION_PRICES_COLLECTION_ID,
        sessionPricesDocumentId: import.meta.env
          .VITE_MANOR_BEACH_SESSION_PRICES_DOCUMENT_ID,
        childrenCollectionId: import.meta.env
          .VITE_MANOR_BEACH_CHILDREN_COLLECTION_ID,
        bookedSessionsCollectionId: import.meta.env
          .VITE_MANOR_BEACH_BOOKED_SESSIONS_COLLECTION_ID,
      };
    default:
      return {
        projectId: import.meta.env.VITE_TEST_SCHOOL_PROJECT_ID,
        databaseId: import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        appOwnerEmail: import.meta.env.VITE_TEST_SCHOOL_SCHOOL_EMAIL,
        appOwnerId: import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID,
        userCollectionId: import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
        termDatesCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_TERM_DATES_COLLECTION_ID,
        sessionPricesCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_SESSION_PRICES_COLLECTION_ID,
        sessionPricesDocumentId: import.meta.env
          .VITE_TEST_SCHOOL_SESSION_PRICES_DOCUMENT_ID,
        childrenCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_CHILDREN_COLLECTION_ID,
        bookedSessionsCollectionId: import.meta.env
          .VITE_TEST_SCHOOL_BOOKED_SESSIONS_COLLECTION_ID,
      };
  }
};
