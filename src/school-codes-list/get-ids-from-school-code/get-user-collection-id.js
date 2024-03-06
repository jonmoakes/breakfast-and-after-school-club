import { schoolCodesList } from "../school-codes-list";

const { testSchool, cleveleysPrimary } = schoolCodesList;

export const getUserCollectionId = () => {
  const schoolCode = localStorage.getItem("schoolCode");
  switch (schoolCode) {
    case testSchool:
      return import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID;
    case cleveleysPrimary:
      return import.meta.env.VITE_CLEVELEYS_PRIMARY_USER_COLLECTION_ID;
    default:
      return "";
  }
};
