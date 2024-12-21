import { testSchoolEnvVariables } from "./school-env-variables/test-school-env-variables";
import { schoolCodesList } from "../school-codes-list";

const { testSchool } = schoolCodesList;

export const setEnvironmentVariables = (schoolCode) => {
  switch (schoolCode) {
    case testSchool:
      return testSchoolEnvVariables;
    default:
      return {};
  }
};
