import {
  isAfter,
  isFriday,
  isMonday,
  isThursday,
  isTuesday,
  isWednesday,
} from "date-fns";

import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import useGetChildrenLogic from "../../book-a-session/book-a-session-hooks/logic/use-get-children-logic";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

const useRecurringSessionsFunctions = (
  dayChoice,
  sessionChoice,
  morningSessionPrice,
  afternoonShortSessionPrice,
  afternoonLongSessionPrice,
  morningAndAfternoonShortSessionPrice,
  morningAndAfternoonLongSessionPrice
) => {
  const { dateData, requestDateDataIsLoading, requestDateDataError } =
    useGetRequestDateDataSelectors();
  const { getUsersChildrenIsLoading, getUsersChildrenError } =
    useGetUsersChildrenSelectors();
  const { sessionTypesAndPricesIsLoading } =
    useGetSessionTypesAndPricesSelectors();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  //can share with normal book session
  const {
    noChildrenAddedYet,
    hasOneChild,
    hasMoreThanOneChild,
    atLeastOneChildHasBeenSelected,
    usersChildren,
    childrenSelectedLength,
  } = useGetChildrenLogic();

  const chosenDayDateDocuments = Array.isArray(dateData)
    ? dateData.filter((doc) => {
        const date = new Date(doc.date);
        switch (dayChoice) {
          case "monday":
            return isMonday(date);
          case "tuesday":
            return isTuesday(date);
          case "wednesday":
            return isWednesday(date);
          case "thursday":
            return isThursday(date);
          case "friday":
            return isFriday(date);
          default:
            return false;
        }
      })
    : [];

  const monthlyMorningDatesAfterCurrentDateWithSessionsAvailable = () => {
    const filteredMorningSessionDocuments = chosenDayDateDocuments
      ? chosenDayDateDocuments.filter((doc) => {
          const currentDate = new Date("2024-07-01");
          const docDateObject = new Date(doc.date);
          docDateObject.setHours(0, 0, 0, 0);
          return (
            isAfter(docDateObject, currentDate) && doc.morningSessionSpaces > 0
          );
        })
      : [];
    return filteredMorningSessionDocuments;
  };

  const monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable = () => {
    const filteredAfternoonSessionDocuments = chosenDayDateDocuments
      ? chosenDayDateDocuments.filter((doc) => {
          const currentDate = new Date("2024-07-01");
          const docDateObject = new Date(doc.date);
          docDateObject.setHours(0, 0, 0, 0);
          return (
            isAfter(docDateObject, currentDate) &&
            doc.afternoonSessionSpaces > 0
          );
        })
      : [];
    return filteredAfternoonSessionDocuments;
  };

  const monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable =
    () => {
      const filteredMorningAndAfternoonSessionDocuments = chosenDayDateDocuments
        ? chosenDayDateDocuments.filter((doc) => {
            const currentDate = new Date("2024-07-01");
            const docDateObject = new Date(doc.date);
            docDateObject.setHours(0, 0, 0, 0);
            return (
              isAfter(docDateObject, currentDate) &&
              doc.morningSessionSpaces > 0 &&
              doc.afternoonSessionSpaces > 0
            );
          })
        : [];
      return filteredMorningAndAfternoonSessionDocuments;
    };

  const calculateCostOfSessionsUserWantsToBook = () => {
    switch (sessionChoice) {
      case "morning":
        return hasOneChild()
          ? morningSessionPrice *
              monthlyMorningDatesAfterCurrentDateWithSessionsAvailable()
                .length *
              100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              morningSessionPrice *
                monthlyMorningDatesAfterCurrentDateWithSessionsAvailable()
                  .length *
                100 *
                childrenSelectedLength;
      case "afternoonShort":
        return hasOneChild()
          ? afternoonShortSessionPrice *
              monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                .length *
              100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              afternoonShortSessionPrice *
                monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                  .length *
                100 *
                childrenSelectedLength;
      case "afternoonLong":
        return hasOneChild()
          ? afternoonLongSessionPrice *
              monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                .length *
              100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              afternoonLongSessionPrice *
                monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                  .length *
                100 *
                childrenSelectedLength;
      case "morningAndAfternoonShort":
        return hasOneChild()
          ? morningAndAfternoonShortSessionPrice *
              monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                .length *
              100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              morningAndAfternoonShortSessionPrice *
                monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                  .length *
                100 *
                childrenSelectedLength;
      case "morningAndAfternoonLong":
        return hasOneChild()
          ? morningAndAfternoonLongSessionPrice *
              monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                .length *
              100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              morningAndAfternoonLongSessionPrice *
                monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable()
                  .length *
                100 *
                childrenSelectedLength;
      default:
        return null;
    }
  };

  const formattedSessionChoiceString = () => {
    return sessionChoice === "morning"
      ? "morning "
      : !afternoonShortSessionPrice && sessionChoice === "afternoonLong"
      ? "afternoon"
      : !afternoonShortSessionPrice &&
        sessionChoice === "morningAndAfternoonLong"
      ? "morning and afternoon"
      : afternoonShortSessionPrice && sessionChoice === "afternoonShort"
      ? "afternoon short "
      : afternoonShortSessionPrice && sessionChoice === "afternoonLong"
      ? "afternoon long "
      : afternoonShortSessionPrice &&
        sessionChoice === "morningAndAfternoonShort"
      ? "morning and afternoon short "
      : afternoonShortSessionPrice &&
        sessionChoice === "morningAndAfternoonLong"
      ? "morning and afternoon long "
      : sessionChoice;
  };

  const showLoaders = () => {
    return requestDateDataIsLoading ||
      getUsersChildrenIsLoading ||
      sessionTypesAndPricesIsLoading ||
      databaseManagementIsLoading
      ? true
      : false;
  };

  return {
    calculateCostOfSessionsUserWantsToBook,
    formattedSessionChoiceString,
    monthlyMorningDatesAfterCurrentDateWithSessionsAvailable,
    monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable,
    monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable,
    showLoaders,
    requestDateDataError,
    getUsersChildrenError,
    noChildrenAddedYet,
    hasOneChild,
    hasMoreThanOneChild,
    usersChildren,
    atLeastOneChildHasBeenSelected,
  };
};

export default useRecurringSessionsFunctions;
