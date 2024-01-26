import { client } from "../utils/appwrite/appwrite-config";

import { schoolCodesList } from "../school-codes-list/school-codes-list";

export const setProjectId = (schoolCode) => {
  const { cleveleysPrimary } = schoolCodesList;
  switch (schoolCode) {
    case cleveleysPrimary:
      client.setProject(import.meta.env.VITE_CLEVELEYS_PRIMARY_PROJECT_ID);
      break;
    default:
      client.setProject(import.meta.env.VITE_TEST_SCHOOL_PROJECT_ID);
  }
};
