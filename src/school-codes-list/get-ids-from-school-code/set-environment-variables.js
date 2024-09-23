import { testSchoolEnvVariables } from "./school-env-variables/test-school-env-variables";
import { manorBeachEnvVariables } from "./school-env-variables/manor-beach-env-variables";
import { schoolCodesList } from "../school-codes-list";

const { testSchool, manorBeach } = schoolCodesList;

export const setEnvironmentVariables = (schoolCode) => {
  switch (schoolCode) {
    case testSchool:
      return testSchoolEnvVariables;
    case manorBeach:
      return manorBeachEnvVariables;
    default:
      return {};
  }
};
