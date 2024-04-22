import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

const useHandleUpdateMorningSessionClosingTimeChange = () => {
  const { dispatchSetNewMorningBookingClosingTime } =
    useDatabaseManagementActions();

  const handleUpdateMorningSessionClosingTimeChange = (event) => {
    dispatchSetNewMorningBookingClosingTime(event.target.value);
  };

  return { handleUpdateMorningSessionClosingTimeChange };
};

export default useHandleUpdateMorningSessionClosingTimeChange;
