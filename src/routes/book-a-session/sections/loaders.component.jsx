import { useSelector } from "react-redux";

import useSelectBookSessionSelectors from "../book-a-session-hooks/select-book-session-selectors/use-select-book-session-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import { selectSendEmailSelectors } from "../../../store/send-email/send-email.slice";
import { selectSessionTypesAndPricesSelectors } from "../../../store/session-types-and-prices/session-types-and-prices.slice";

import Loader from "../../../components/loader/loader.component";

const Loaders = () => {
  const { requestDateDataIsLoading } = useGetRequestDateDataSelectors();
  const { bookSessionIsLoading } = useSelectBookSessionSelectors();

  const { sessionTypesAndPricesIsLoading } = useSelector(
    selectSessionTypesAndPricesSelectors
  );
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
