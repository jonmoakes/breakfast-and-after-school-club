import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

const useDbManagementVariables = () => {
  const {
    databaseManagementIsLoading,
    databaseManagementResult,
    databaseManagementError,
  } = useGetDatabaseManagementSelectors();
  const { requestDateDataIsLoading, requestDateDataError } =
    useGetRequestDateDataSelectors();
  const { sessionTypesAndPricesIsLoading, sessionTypesAndPricesError } =
    useGetSessionTypesAndPricesSelectors();

  return {
    databaseManagementIsLoading,
    databaseManagementResult,
    databaseManagementError,
    requestDateDataIsLoading,
    requestDateDataError,
    sessionTypesAndPricesIsLoading,
    sessionTypesAndPricesError,
  };
};

export default useDbManagementVariables;
