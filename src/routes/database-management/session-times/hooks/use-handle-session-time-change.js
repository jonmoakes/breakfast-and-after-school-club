import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

const useHandleNewSessionTimesChange = () => {
  const {
    dispatchSetNewMorningSessionTime,
    dispatchSetNewAfternoonShortSessionTime,
    dispatchSetNewAfternoonLongSessionTime,
  } = useDatabaseManagementActions();

  const handleNewMorningSessionTimeChange = (event) => {
    dispatchSetNewMorningSessionTime(event.target.value);
  };

  const handleNewAfternoonShortSessionTimeChange = (event) => {
    dispatchSetNewAfternoonShortSessionTime(event.target.value);
  };

  const handleNewAfternoonLongSessionTimeChange = (event) => {
    dispatchSetNewAfternoonLongSessionTime(event.target.value);
  };

  return {
    handleNewMorningSessionTimeChange,
    handleNewAfternoonShortSessionTimeChange,
    handleNewAfternoonLongSessionTimeChange,
  };
};

export default useHandleNewSessionTimesChange;
