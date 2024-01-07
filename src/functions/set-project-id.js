import { client } from "../utils/appwrite/appwrite-config";

import { schoolCodesList } from "../school-codes-list/school-codes-list";

export const setProjectId = (schoolCode) => {
  const { manorBeach } = schoolCodesList;
  switch (schoolCode) {
    case manorBeach:
      client.setProject(import.meta.env.VITE_MANOR_BEACH_PROJECT_ID);
      break;
    default:
      client.setProject(import.meta.env.VITE_TEST_SCHOOL_PROJECT_ID);
  }
};
