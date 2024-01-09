import { schoolCodesList } from "../school-codes-list/school-codes-list";

const { manorBeach } = schoolCodesList;

export const getSchoolDatabaseAndUserCollectionIds = (schoolCode) => {
  switch (schoolCode) {
    case manorBeach:
      return {
        databaseId: import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
        collectionId: import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
      };
    default:
      return {
        databaseId: import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        collectionId: import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
      };
  }
};
