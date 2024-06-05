import { testSchoolEnvVariables } from "./school-env-variables/test-school-env-variables";
import { cleveleysPrimaryEnvVariables } from "./school-env-variables/cleveleys-primary-env-variables";
import { schoolOneEnvVariables } from "./school-env-variables/school-one-env-variables";
import { schoolCodesList } from "../school-codes-list";

const { testSchool, cleveleysPrimary, schoolOne } = schoolCodesList;

export const setEnvironmentVariables = (schoolCode) => {
  switch (schoolCode) {
    case testSchool:
      return testSchoolEnvVariables;
    case cleveleysPrimary:
      return cleveleysPrimaryEnvVariables;
    case schoolOne:
      return schoolOneEnvVariables;
    default:
      return {};
  }
};
