import { schoolCodesList } from "../school-codes-list/school-codes-list";

export const isNotValidSchoolCode = (schoolCode) => {
  return !Object.values(schoolCodesList).includes(schoolCode);
};
