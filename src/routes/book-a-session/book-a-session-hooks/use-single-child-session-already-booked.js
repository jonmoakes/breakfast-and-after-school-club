import { useSelector } from "react-redux";
import { selectUserBookings } from "../../../store/user-bookings/user-bookings.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import useConditionalLogic from "./use-conditional-logic";

const useSingleChildSessionAlreadyBooked = () => {
  const { date } = useConditionalLogic();

  const usersChildren = useSelector(selectUsersChildren);
  const userBookings = useSelector(selectUserBookings);
  const { childName } = usersChildren[0];

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

  const singleChildSessionAlreadyBooked = (sessionType) => {
    return !!userBookingsDatesAndNamesAndSessionType.find(
      (userBooking) =>
        userBooking.date === date &&
        userBooking.childrensName === childName &&
        (isMorningSession(userBooking, sessionType) ||
          isAfternoonShortSession(userBooking, sessionType) ||
          isAfternoonLongSession(userBooking, sessionType) ||
          isMorningAndAfternoonShortSession(userBooking, sessionType) ||
          isMorningAndAfternoonLongSession(userBooking, sessionType))
    );
  };

  return { singleChildSessionAlreadyBooked };
};

export default useSingleChildSessionAlreadyBooked;
