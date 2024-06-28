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
import useDispatchBookRecurringSessionsThunks from "../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-dispatch-book-recurring-sessions-thunks";
import {
  confirmChangeChildrenQuestion,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const useRecurringSessionsFunctions = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const {
    sessionTypesAndPrices,
    dateData,
    dayChoice,
    sessionChoice,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    childrenSelectedLength,
    requestDateDataIsLoading,
    getUsersChildrenIsLoading,
    sessionTypesAndPricesIsLoading,
    databaseManagementIsLoading,
    bookRecurringSessionsIsLoading,
    bookingsToAdd,
    numberOfChildrenInBooking,
    sendEmailIsLoading,
  } = useBookRecurringSessionsVariables();
  const {
    noChildrenAddedYet,
    hasOneChild,
    hasMoreThanOneChild,
    atLeastOneChildHasBeenSelected,
  } = useGetChildrenLogic();
  const { requestSessionPricesThunk } = useRequestSessionPricesThunk();
  const { dispatchBookRecurringSessionsThunks } =
    useDispatchBookRecurringSessionsThunks();
  const {
    dispatchSetDayChoice,
    dispatchSetSessionChoice,
    dispatchSetBookingsToAdd,
    dispatchSetShowConfirmButton,
    dispatchSetShowHelp,
  } = useBookRecurringSessionsActions();
  const { confirmSwal } = useConfirmSwal();

  const showLoaders = () => {
    return requestDateDataIsLoading ||
      getUsersChildrenIsLoading ||
      sessionTypesAndPricesIsLoading ||
      databaseManagementIsLoading ||
      bookRecurringSessionsIsLoading ||
      sendEmailIsLoading
      ? true
      : false;
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
          // const currentDate = new Date();
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
          // const currentDate = new Date();
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

  const noMorningSessions = () => {
    return sessionChoice === "morning" && !morningDatesList().length && true;
  };

  const noAfternoonSessions = () => {
    return (
      (sessionChoice === "afternoonShort" ||
        sessionChoice === "afternoonLong") &&
      !afternoonDatesList().length &&
      true
    );
  };

  const totalCost = () => {
    const numberOfSessionsInBooking = bookingsToAdd
      ? bookingsToAdd.length
      : null;

    switch (sessionChoice) {
      case "morning":
        return hasOneChild()
          ? morningSessionPrice * numberOfSessionsInBooking * 100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              morningSessionPrice *
                numberOfSessionsInBooking *
                100 *
                childrenSelectedLength;
      case "afternoonShort":
        return hasOneChild()
          ? afternoonShortSessionPrice * numberOfSessionsInBooking * 100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              afternoonShortSessionPrice *
                numberOfSessionsInBooking *
                100 *
                childrenSelectedLength;
      case "afternoonLong":
        return hasOneChild()
          ? afternoonLongSessionPrice * numberOfSessionsInBooking * 100
          : hasMoreThanOneChild() &&
              childrenSelectedLength &&
              afternoonLongSessionPrice *
                numberOfSessionsInBooking *
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
      : afternoonShortSessionPrice && sessionChoice === "afternoonShort"
      ? "afternoon short "
      : afternoonShortSessionPrice && sessionChoice === "afternoonLong"
      ? "afternoon long "
      : sessionChoice;
  };

  let bookingData =
    sessionChoice === "morning"
      ? morningDatesList()
      : sessionChoice === "afternoonShort" || sessionChoice === "afternoonLong"
      ? afternoonDatesList()
      : null;

  const resetDayAndSessionChoices = () => {
    dispatchSetDayChoice("");
    dispatchSetSessionChoice("");
    dispatchSetShowConfirmButton(false);
    dispatchSetShowHelp(false);
    dispatchSetBookingsToAdd(null);
  };

  const hasOneChildOrHasMoreThanOneChildAndAtLeastOneHasBeenSelected = () => {
    return (
      hasOneChild() ||
      (hasMoreThanOneChild() && atLeastOneChildHasBeenSelected() && true)
    );
  };

  const bookSessions = () => {
    const confirmResult = () => {
      const sessionPrice = totalCost();

      dispatchBookRecurringSessionsThunks(
        bookingsToAdd,
        numberOfChildrenInBooking,
        sessionChoice,
        sessionPrice
      );
    };

    const balanceAfterBooking = ((walletBalance - totalCost()) / 100).toFixed(
      2
    );

    confirmSwal(
      "book these sessions?",
      fundsDeductedFromBalance(totalCost(), balanceAfterBooking),
      "yes",
      confirmResult
    );
  };

  const confirmReload = () => {
    confirmSwal(confirmChangeChildrenQuestion, "", imSureMessage, () =>
      window.location.reload()
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
    hasOneChild,
    hasMoreThanOneChild,
    dispatchSetBookingsToAdd,
    dispatchSetShowConfirmButton,
    dispatchSetShowHelp,
    bookSessions,
    dispatchSetSessionChoice,
    confirmReload,
    noMorningSessions,
    noAfternoonSessions,
  };
};

export default useRecurringSessionsFunctions;
