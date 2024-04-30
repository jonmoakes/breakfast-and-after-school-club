import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

const useSessionTimesVariables = () => {
  const {
    morningSessionTime,
    afternoonShortSessionTime,
    afternoonLongSessionTime,
  } = useGetRequestDateDataSelectors();
  const {
    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
    sessionTimeResult,
    sessionTimeError,
  } = useGetDatabaseManagementSelectors();

  return {
    morningSessionTime,
    afternoonShortSessionTime,
    afternoonLongSessionTime,
    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
    sessionTimeResult,
    sessionTimeError,
  };
};

export default useSessionTimesVariables;
