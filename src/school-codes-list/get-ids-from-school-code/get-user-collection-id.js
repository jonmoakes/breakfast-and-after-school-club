import { schoolCodesList } from "../school-codes-list";

const { testSchool, manorBeach } = schoolCodesList;

export const getUserCollectionId = () => {
  const schoolCode = localStorage.getItem("schoolCode");
  switch (schoolCode) {
    case testSchool:
      return import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID;
    case manorBeach:
      return import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID;
    default:
      return "";
  }
};
