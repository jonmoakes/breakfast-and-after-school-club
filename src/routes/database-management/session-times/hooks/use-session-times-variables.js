import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";

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
  } = useGetDatabaseManagementSelectors();

  const morningSessionText = "morning";
  const afternoonShortSessionText = "afternoon short";
  const afternoonLongSessionText = "afternoon long";

  return {
    morningSessionTime,
    afternoonShortSessionTime,
    afternoonLongSessionTime,
    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
    morningSessionText,
    afternoonShortSessionText,
    afternoonLongSessionText,
  };
};

export default useSessionTimesVariables;
