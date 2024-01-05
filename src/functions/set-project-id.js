import { client } from "../utils/appwrite/appwrite-config";

import { manorBeachCode } from "../school-codes/school-codes";

export const setProjectId = (schoolCode) => {
  switch (schoolCode) {
    case manorBeachCode:
      client.setProject(import.meta.env.VITE_MANOR_BEACH_PROJECT_ID);
      break;
    default:
      client.setProject(import.meta.env.VITE_TEST_SCHOOL_PROJECT_ID);
  }
};
