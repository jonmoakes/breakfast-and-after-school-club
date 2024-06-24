import {
  isAfter,
  isFriday,
  isMonday,
  isThursday,
  isTuesday,
  isWednesday,
} from "date-fns";

import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

const useRecurringSessionsFunctions = (
  dayChoice,
  sessionChoice,
  morningSessionPrice,
  afternoonShortSessionPrice,
  afternoonLongSessionPrice,
  morningAndAfternoonShortSessionPrice,
  morningAndAfternoonLongSessionPrice
) => {
  const { dateData } = useGetRequestDateDataSelectors();

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
        return (
          morningSessionPrice *
          monthlyMorningDatesAfterCurrentDateWithSessionsAvailable().length *
          100
        );
      case "afternoonShort":
        return (
          afternoonShortSessionPrice *
          monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable().length *
          100
        );
      case "afternoonLong":
        return (
          afternoonLongSessionPrice *
          monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable().length *
          100
        );
      case "morningAndAfternoonShort":
        return (
          morningAndAfternoonShortSessionPrice *
          monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable()
            .length *
          100
        );
      case "morningAndAfternoonLong":
        return (
          morningAndAfternoonLongSessionPrice *
          monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable()
            .length *
          100
        );
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

  return {
    calculateCostOfSessionsUserWantsToBook,
    formattedSessionChoiceString,
    monthlyMorningDatesAfterCurrentDateWithSessionsAvailable,
    monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable,
    monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable,
  };
};

export default useRecurringSessionsFunctions;
