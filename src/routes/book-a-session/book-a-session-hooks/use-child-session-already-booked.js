import { useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useGetBookingDataAndSessionTypeToLowercase from "./use-get-booking-data-and-session-type-to-lowercase";

import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { selectBookSessionSelectors } from "../../../store/book-session/book-session.slice";

const useChildSessionAlreadyBooked = () => {
  const { date } = useConditionalLogic();
  const {
    userBookingsDatesAndNamesAndSessionType,
    isMorningSession,
    isAfternoonShortSession,
    isAfternoonLongSession,
    isMorningAndAfternoonShortSession,
    isMorningAndAfternoonLongSession,
  } = useGetBookingDataAndSessionTypeToLowercase();

  const usersChildren = useSelector(selectUsersChildren);
  const { childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const { childName } = usersChildren[0];

  // if user only has one child in database
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

  // if user has multiple children in database
  const multipleChildSessionAlreadyBooked = (sessionType) => {
    return !!userBookingsDatesAndNamesAndSessionType.find((userBooking) => {
      const sortedNames = [...childrenSelectedForBooking].sort();
      const selectedChildrensNames = sortedNames.join(" ");

      const userBookingsChildrensNamesAsArray = userBooking.childrensName
        .split(",")
        .map((name) => name.trim());

      const sortedUserBookingNames = userBookingsChildrensNamesAsArray.sort();

      // Join the sorted names back into a string minus commas
      const userBookingNames = sortedUserBookingNames
        .join(", ")
        .replace(/,/g, "");

      const aNameInSelectedChildrenIsAlreadyBooked = () => {
        const selectedNamesIntoArray = selectedChildrensNames.split(" ");

        const isAnySelectedNameAlreadyInBooking = selectedNamesIntoArray.some(
          (name) => userBookingNames.includes(name)
        );

        return isAnySelectedNameAlreadyInBooking;
      };

      return (
        userBooking.date === date &&
        aNameInSelectedChildrenIsAlreadyBooked() &&
        (isMorningSession(userBooking, sessionType) ||
          isAfternoonShortSession(userBooking, sessionType) ||
          isAfternoonLongSession(userBooking, sessionType) ||
          isMorningAndAfternoonShortSession(userBooking, sessionType) ||
          isMorningAndAfternoonLongSession(userBooking, sessionType))
      );
    });
  };

  return { singleChildSessionAlreadyBooked, multipleChildSessionAlreadyBooked };
};

export default useChildSessionAlreadyBooked;
