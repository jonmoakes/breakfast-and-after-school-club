import { format } from "date-fns";

const useCancelBookingErrorLogic = (chosenEntry) => {
  const now = new Date();
  const chosenEntryDate = chosenEntry[0] ? chosenEntry[0].date : "";
  const sessionType = chosenEntry[0] ? chosenEntry[0].sessionType : "";
  const currentDate = format(now, "yyyy-MM-dd");
  const currentHour = now.getHours();

  const bookingIsInThePast = () => {
    return chosenEntryDate < currentDate ? true : false;
  };

  const isCurrentDateAfterMorningSessionCutOffTime = () => {
    return (
      chosenEntryDate === currentDate &&
      (sessionType === "morning" ||
        sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
      currentHour >= 9
    );
  };

  const isCurrentDateAndIsAfterAfternoonSessionCutOffTime = () => {
    return (
      chosenEntryDate === currentDate &&
      (sessionType === "afternoonShort" ||
        sessionType === "afternoonLong" ||
        sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
      currentHour >= 15
    );
  };

  return {
    bookingIsInThePast,
    isCurrentDateAfterMorningSessionCutOffTime,
    isCurrentDateAndIsAfterAfternoonSessionCutOffTime,
  };
};

export default useCancelBookingErrorLogic;
