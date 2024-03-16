import { useSelector } from "react-redux";

import useGetBookSessionSelectors from "../../../hooks/get-selectors/use-get-book-session-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

import { selectSendEmailSelectors } from "../../../store/send-email/send-email.slice";

import Loader from "../../../components/loader/loader.component";

const Loaders = () => {
  const { requestDateDataIsLoading } = useGetRequestDateDataSelectors();
  const { bookSessionIsLoading } = useGetBookSessionSelectors();
  const { sessionTypesAndPricesIsLoading } =
    useGetSessionTypesAndPricesSelectors();

  const { sendEmailIsLoading } = useSelector(selectSendEmailSelectors);

  return (
    <>
      {requestDateDataIsLoading ||
      bookSessionIsLoading ||
      sessionTypesAndPricesIsLoading ||
      sendEmailIsLoading ? (
        <Loader />
      ) : null}
    </>
  );
};

export default Loaders;
