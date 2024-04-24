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
  const morningSessionTimeExample = "07:00 - 08:50";
  const afternoonShortSessionTimeExample = "15:30 - 16:30";
  const afternoonLongSessionTimeExample = " 15:30 - 18:00";

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
    morningSessionTimeExample,
    afternoonShortSessionTimeExample,
    afternoonLongSessionTimeExample,
  };
};

export default useSessionTimesVariables;
