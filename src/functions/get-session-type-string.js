export const getSessionTypeString = (sessionType) => {
  switch (sessionType) {
    case "afternoonShort":
      return "afternoon short";
    case "afternoonLong":
      return "afternoon long";
    case "morningAndAfternoonShort":
      return "morning and afternoon short";
    case "morningAndAfternoonLong":
      return "morning and afternoon Long";
    default:
      return "morning";
  }
};
