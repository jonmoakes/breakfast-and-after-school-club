import { schoolCodesList } from "../school-codes-list/school-codes-list";

const { cleveleysPrimary } = schoolCodesList;

export const getSchoolDatabaseAndUserCollectionIds = (schoolCode) => {
  switch (schoolCode) {
    case cleveleysPrimary:
      return {
        databaseId: import.meta.env.VITE_CLEVELEYS_PRIMARY_DATABASE_ID,
        collectionId: import.meta.env.VITE_CLEVELEYS_PRIMARY_USER_COLLECTION_ID,
      };
    default:
      return {
        databaseId: import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        collectionId: import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
      };
  }
};
