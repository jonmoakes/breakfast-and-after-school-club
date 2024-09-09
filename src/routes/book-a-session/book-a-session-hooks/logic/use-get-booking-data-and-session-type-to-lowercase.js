import useGetBookedSessionsUserSelectors from "../../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";

const useGetBookingDataAndSessionTypeToLowercase = () => {
  const { bookedSessionsUser } = useGetBookedSessionsUserSelectors();

  const userBookingsDatesAndNamesAndSessionType = bookedSessionsUser.map(
    (userBooking) => {
      const bookingDate = userBooking.date;
      const childrensName = userBooking.childrensName.toLowerCase();
      const bookingSessionType = userBooking.sessionType;

      return {
        date: bookingDate,
        childrensName,
        sessionType: bookingSessionType,
      };
    }
  );

  const isMorningSession = (userBooking, sessionType) => {
    if (!sessionType) return;
    return (
      userBooking.sessionType.toLowerCase() === "morning" &&
      sessionType.toLowerCase().includes("morning")
    );
  };

  const isAfternoonShortSession = (userBooking, sessionType) => {
    if (!sessionType) return;
    return (
      userBooking.sessionType.toLowerCase() === "afternoonshort" &&
      sessionType.toLowerCase().includes("afternoon")
    );
  };

  const isAfternoonLongSession = (userBooking, sessionType) => {
    if (!sessionType) return;
    return (
      userBooking.sessionType.toLowerCase() === "afternoonlong" &&
      sessionType.toLowerCase().includes("afternoon")
    );
  };

  const isMorningAndAfternoonShortSession = (userBooking, sessionType) => {
    if (!sessionType) return;
    return (
      userBooking.sessionType.toLowerCase() === "morningandafternoonshort" &&
      (sessionType.toLowerCase().includes("morning") ||
        sessionType.toLowerCase().includes("afternoon"))
    );
  };

  const isMorningAndAfternoonLongSession = (userBooking, sessionType) => {
    if (!sessionType) return;
    return (
      userBooking.sessionType.toLowerCase() === "morningandafternoonlong" &&
      (sessionType.toLowerCase().includes("morning") ||
        sessionType.toLowerCase().includes("afternoon"))
    );
  };

  return {
    userBookingsDatesAndNamesAndSessionType,
    isMorningSession,
    isAfternoonShortSession,
    isAfternoonLongSession,
    isMorningAndAfternoonShortSession,
    isMorningAndAfternoonLongSession,
  };
};

export default useGetBookingDataAndSessionTypeToLowercase;
