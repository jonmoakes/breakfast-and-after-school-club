export const getFormattedSessionType = (value) => {
  switch (value) {
    case "afternoonShort":
      return "afternoon short";
    case "afternoonLong":
      return "afternoon long";
    case "morningAndAfternoonShort":
      return "morning and afternoon short";
    case "morningAndAfternoonLong":
      return "morning and afternoon long";
    default:
      return value;
  }
};
