import useDatesLogic from "./use-dates-logic";
import useGetBookingDataAndSessionTypeToLowercase from "./use-get-booking-data-and-session-type-to-lowercase";
import useGetChildrenLogic from "./use-get-children-logic";

import { removeStarFromChildrensNamesIfExists } from "../../../../functions/remove-star-from-childrens-name-if-exists";

const useChildSessionAlreadyBooked = () => {
  const { date } = useDatesLogic();
  const {
    userBookingsDatesAndNamesAndSessionType,
    isMorningSession,
    isAfternoonShortSession,
    isAfternoonLongSession,
    isMorningAndAfternoonShortSession,
    isMorningAndAfternoonLongSession,
  } = useGetBookingDataAndSessionTypeToLowercase();
  const { childrenSelectedForBooking, childName } = useGetChildrenLogic();

  // if user only has one child in database
  const singleChildSessionAlreadyBooked = (sessionType) => {
    return !!userBookingsDatesAndNamesAndSessionType.find(
      (userBooking) =>
        userBooking.date === date &&
        removeStarFromChildrensNamesIfExists(userBooking.childrensName) ===
          childName &&
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

      const selectedChildrensNames = removeStarFromChildrensNamesIfExists(
        sortedNames.join(" ")
      );

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
