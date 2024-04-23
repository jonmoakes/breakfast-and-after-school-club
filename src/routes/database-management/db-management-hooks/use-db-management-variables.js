import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

const useDbManagementVariables = () => {
  const {
    databaseManagementIsLoading,
    databaseManagementResult,
    databaseManagementError,
  } = useGetDatabaseManagementSelectors();
  const { requestDateDataIsLoading, requestDateDataError } =
    useGetRequestDateDataSelectors();

  return {
    databaseManagementIsLoading,
    databaseManagementResult,
    databaseManagementError,
    requestDateDataIsLoading,
    requestDateDataError,
  };
};

export default useDbManagementVariables;
