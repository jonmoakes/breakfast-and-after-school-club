import { useSelector } from "react-redux";

import { selectBookedSessionsUserSelectors } from "../../../../store/booked-sessions-user/booked-sessions-user.slice";

const useGetBookingDataAndSessionTypeToLowercase = () => {
  const { bookedSessionsUser } = useSelector(selectBookedSessionsUserSelectors);

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

  const isMorningSession = (userBooking, sessionType) =>
    userBooking.sessionType.toLowerCase() === "morning" &&
    sessionType.toLowerCase().includes("morning");

  const isAfternoonShortSession = (userBooking, sessionType) =>
    userBooking.sessionType.toLowerCase() === "afternoonshort" &&
    sessionType.toLowerCase().includes("afternoon");

  const isAfternoonLongSession = (userBooking, sessionType) =>
    userBooking.sessionType.toLowerCase() === "afternoonlong" &&
    sessionType.toLowerCase().includes("afternoon");

  const isMorningAndAfternoonShortSession = (userBooking, sessionType) =>
    userBooking.sessionType.toLowerCase() === "morningandafternoonshort" &&
    (sessionType.toLowerCase().includes("morning") ||
      sessionType.toLowerCase().includes("afternoon"));

  const isMorningAndAfternoonLongSession = (userBooking, sessionType) =>
    userBooking.sessionType.toLowerCase() === "morningandafternoonlong" &&
    (sessionType.toLowerCase().includes("morning") ||
      sessionType.toLowerCase().includes("afternoon"));

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
