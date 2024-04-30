import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

const useHandleClosingTimeChanges = () => {
  const {
    dispatchSetNewMorningBookingClosingTime,
    dispatchSetNewAfternoonBookingClosingTime,
  } = useDatabaseManagementActions();

  const handleUpdateMorningSessionClosingTimeChange = (event) => {
    dispatchSetNewMorningBookingClosingTime(event.target.value);
  };

  const handleUpdateAfternoonSessionClosingTimeChange = (event) => {
    dispatchSetNewAfternoonBookingClosingTime(event.target.value);
  };

  return {
    handleUpdateMorningSessionClosingTimeChange,
    handleUpdateAfternoonSessionClosingTimeChange,
  };
};

export default useHandleClosingTimeChanges;
