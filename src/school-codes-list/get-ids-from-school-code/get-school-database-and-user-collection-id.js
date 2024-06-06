import { schoolCodesList } from "../school-codes-list";

const { schoolOne } = schoolCodesList;

export const getSchoolDatabaseAndUserCollectionId = (schoolCode) => {
  switch (schoolCode) {
    case schoolOne:
      return {
        databaseId: import.meta.env.VITE_SCHOOL_ONE_DATABASE_ID,
        collectionId: import.meta.env.VITE_SCHOOL_ONE_USER_COLLECTION_ID,
      };
    default:
      return {
        databaseId: import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        collectionId: import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
      };
  }
};
