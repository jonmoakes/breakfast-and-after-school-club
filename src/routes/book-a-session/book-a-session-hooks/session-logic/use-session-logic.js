import useDatesLogic from "../dates-logic/use-dates-logic";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useSelectBookSessionSelectors from "../select-book-session-selectors/use-select-book-session-selectors";

const useSessionLogic = () => {
  const { date } = useDatesLogic();
  const { dateData } = useGetRequestDateDataSelectors();
  const { childrenSelectedForBooking } = useSelectBookSessionSelectors();

  const morningSessionSpaces = dateData ? dateData.morningSessionSpaces : "";
  const afternoonSessionSpaces = dateData
    ? dateData.afternoonSessionSpaces
    : "";

  const onlyMorningSessionsAvailable = () => {
    return date && morningSessionSpaces && !afternoonSessionSpaces
      ? true
      : false;
  };

  const onlyAfternoonSessionsAvailable = () => {
    return date && !morningSessionSpaces && afternoonSessionSpaces
      ? true
      : false;
  };

  const allSessionsAvailable = () => {
    return date && morningSessionSpaces && afternoonSessionSpaces
      ? true
      : false;
  };

  const notEnoughMorningSpacesForMultipleChildren = (sessionType) => {
    return sessionType === "morning" &&
      childrenSelectedForBooking.length > 1 &&
      morningSessionSpaces < childrenSelectedForBooking.length
      ? true
      : false;
  };

  const notEnoughAfternoonSpacesForMultipleChildren = (sessionType) => {
    return (sessionType === "afternoonShort" ||
      sessionType === "afternoonLong") &&
      childrenSelectedForBooking.length > 1 &&
      afternoonSessionSpaces < childrenSelectedForBooking.length
      ? true
      : false;
  };

  const notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession =
    (sessionType) => {
      return (sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
        childrenSelectedForBooking.length > 1 &&
        morningSessionSpaces < childrenSelectedForBooking.length
        ? true
        : false;
    };

  const notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession =
    (sessionType) => {
      return (sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
        childrenSelectedForBooking.length > 1 &&
        afternoonSessionSpaces < childrenSelectedForBooking.length
        ? true
        : false;
    };

  return {
    onlyMorningSessionsAvailable,
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    notEnoughMorningSpacesForMultipleChildren,
    notEnoughAfternoonSpacesForMultipleChildren,
    notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession,
    notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession,
  };
};

export default useSessionLogic;
