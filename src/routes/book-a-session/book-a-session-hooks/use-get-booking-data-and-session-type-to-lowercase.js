import { useSelector } from "react-redux";

import { selectUserBookings } from "../../../store/user-bookings/user-bookings.selector";

const useGetBookingDataAndSessionTypeToLowercase = () => {
  const userBookings = useSelector(selectUserBookings);

  const userBookingsDatesAndNamesAndSessionType = userBookings.map(
    (userBooking) => {
      const bookingDate = userBooking.date;
      const childrensName = userBooking.childrensName;
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
