import { useSelector } from "react-redux";

import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import { selectBookSessionSelectors } from "../../../store/book-session/book-session.slice";
import { selectSendEmailSelectors } from "../../../store/send-email/send-email.slice";
import { selectSessionTypesAndPricesSelectors } from "../../../store/session-types-and-prices/session-types-and-prices.slice";

import Loader from "../../../components/loader/loader.component";

const Loaders = () => {
  const { requestDateDataIsLoading } = useSelector(
    selectRequestDateDataSelectors
  );

  const { bookSessionIsLoading } = useSelector(selectBookSessionSelectors);
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
