import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetSendEmailSelectors from "../../../../hooks/get-selectors/use-get-send-email-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

const useShowLoadersLogic = () => {
  const { requestDateDataIsLoading } = useGetRequestDateDataSelectors();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { sessionTypesAndPricesIsLoading } =
    useGetSessionTypesAndPricesSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  const showLoaders = () => {
    return requestDateDataIsLoading ||
      databaseManagementIsLoading ||
      sessionTypesAndPricesIsLoading ||
      sendEmailIsLoading
      ? true
      : false;
  };

  return { showLoaders };
};

export default useShowLoadersLogic;
