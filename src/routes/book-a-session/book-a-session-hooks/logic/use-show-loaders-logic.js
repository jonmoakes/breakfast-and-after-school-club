import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

const useShowLoadersLogic = () => {
  const { requestDateDataIsLoading } = useGetRequestDateDataSelectors();
  const { bookSessionIsLoading } = useGetBookSessionSelectors();
  const { sessionTypesAndPricesIsLoading } =
    useGetSessionTypesAndPricesSelectors();

  const showLoaders = () => {
    return requestDateDataIsLoading ||
      bookSessionIsLoading ||
      sessionTypesAndPricesIsLoading
      ? true
      : false;
  };

  return { showLoaders };
};

export default useShowLoadersLogic;
