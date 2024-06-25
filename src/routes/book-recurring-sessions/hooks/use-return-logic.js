import useGetBookRecurringSessionsSelectors from "../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";

const useReturnLogic = () => {
  const {
    updateSessionSpacesResult,
    updateSessionSpacesError,
    addRecurringBookingsResult,
    addRecurringBookingsError,
  } = useGetBookRecurringSessionsSelectors();
  const { updateBalanceResult, updateBalanceError } =
    useGetDatabaseManagementSelectors();

  const noActionsFiredYet = () => {
    return (
      !updateSessionSpacesResult &&
      !updateSessionSpacesError &&
      !updateBalanceResult &&
      !updateBalanceError &&
      !addRecurringBookingsResult &&
      !addRecurringBookingsError &&
      true
    );
  };

  return { noActionsFiredYet };
};

export default useReturnLogic;
