import {
  isAfter,
  isFriday,
  isMonday,
  isThursday,
  isTuesday,
  isWednesday,
} from "date-fns";

import useBookRecurringSessionsActions from "../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-book-recurring-sessions-actions";
import useRequestSessionPricesThunk from "../../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-request-session-prices-thunk";
import useBookRecurringSessionsVariables from "./use-book-recurring-sessions-variables";
import useGetChildrenLogic from "../../book-a-session/book-a-session-hooks/logic/use-get-children-logic";

const useRecurringSessionsFunctions = () => {
  const {
    sessionTypesAndPrices,
    dateData,
    dayChoice,
    sessionChoice,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
    childrenSelectedLength,
    requestDateDataIsLoading,
    getUsersChildrenIsLoading,
    sessionTypesAndPricesIsLoading,
    databaseManagementIsLoading,
    bookRecurringSessionsIsLoading,
  } = useBookRecurringSessionsVariables();
  const {
    noChildrenAddedYet,
    hasOneChild,
    hasMoreThanOneChild,
    atLeastOneChildHasBeenSelected,
  } = useGetChildrenLogic();
  const { requestSessionPricesThunk } = useRequestSessionPricesThunk();
  const { dispatchSetDayChoice, dispatchSetSessionChoice } =
    useBookRecurringSessionsActions();

  const showLoaders = () => {
    return requestDateDataIsLoading ||
      getUsersChildrenIsLoading ||
      sessionTypesAndPricesIsLoading ||
      databaseManagementIsLoading ||
      bookRecurringSessionsIsLoading
      ? true
      : false;
  };

  const resetDayAndSessionChoices = () => {
    dispatchSetDayChoice("");
    dispatchSetSessionChoice("");
  };

  const setChoiceAndGetSessionTypesAndPrices = (choice) => {
    if (!Object.keys(sessionTypesAndPrices).length) {
      dispatchSetDayChoice(choice);
      requestSessionPricesThunk();
    } else {
      dispatchSetDayChoice(choice);
    }
  };

  const documentsMatchingDayChoice = Array.isArray(dateData)
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
            return "";
        }
      })
    : [];

  const morningDatesList = () => {
    const filteredMorningSessionDocuments = documentsMatchingDayChoice
      ? documentsMatchingDayChoice.filter((doc) => {
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

  const afternoonDatesList = () => {
    const filteredAfternoonSessionDocuments = documentsMatchingDayChoice
      ? documentsMatchingDayChoice.filter((doc) => {
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

  const morningAndAfternoonDatesList = () => {
    const filteredMorningAndAfternoonSessionDocuments =
      documentsMatchingDayChoice
        ? documentsMatchingDayChoice.filter((doc) => {
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

  const totalCost = () => {
    switch (sessionChoice) {
      case "morning":
        return hasOneChild()
          ? morningSessionPrice * morningDatesList().length * 100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              morningSessionPrice *
                morningDatesList().length *
                100 *
                childrenSelectedLength;
      case "afternoonShort":
        return hasOneChild()
          ? afternoonShortSessionPrice * afternoonDatesList().length * 100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              afternoonShortSessionPrice *
                afternoonDatesList().length *
                100 *
                childrenSelectedLength;
      case "afternoonLong":
        return hasOneChild()
          ? afternoonLongSessionPrice * afternoonDatesList().length * 100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              afternoonLongSessionPrice *
                afternoonDatesList().length *
                100 *
                childrenSelectedLength;
      case "morningAndAfternoonShort":
        return hasOneChild()
          ? morningAndAfternoonShortSessionPrice *
              morningAndAfternoonDatesList().length *
              100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              morningAndAfternoonShortSessionPrice *
                morningAndAfternoonDatesList().length *
                100 *
                childrenSelectedLength;
      case "morningAndAfternoonLong":
        return hasOneChild()
          ? morningAndAfternoonLongSessionPrice *
              morningAndAfternoonDatesList().length *
              100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              morningAndAfternoonLongSessionPrice *
                morningAndAfternoonDatesList().length *
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

  const bookingData =
    sessionChoice === "morning"
      ? morningDatesList()
      : sessionChoice === "afternoonShort" || sessionChoice === "afternoonLong"
      ? afternoonDatesList()
      : sessionChoice === "morningAndAfternoonShort" ||
        sessionChoice === "morningAndAfternoonLong"
      ? morningAndAfternoonDatesList()
      : null;

  const hasOneChildOrHasMoreThanOneChildAndAtLeastOneHasBeenSelected = () => {
    return (
      hasOneChild() ||
      (hasMoreThanOneChild() && atLeastOneChildHasBeenSelected() && true)
    );
  };

  return {
    showLoaders,
    resetDayAndSessionChoices,
    setChoiceAndGetSessionTypesAndPrices,
    totalCost,
    formattedSessionChoiceString,
    bookingData,
    noChildrenAddedYet,
    hasOneChildOrHasMoreThanOneChildAndAtLeastOneHasBeenSelected,
    morningDatesList,
    afternoonDatesList,
    morningAndAfternoonDatesList,
    hasOneChild,
    hasMoreThanOneChild,
  };
};

export default useRecurringSessionsFunctions;
