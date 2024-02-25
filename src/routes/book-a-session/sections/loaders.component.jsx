import { useSelector } from "react-redux";

import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import { selectBookSessionSelectors } from "../../../store/book-session/book-session.slice";
import { selectGetPricesIsLoading } from "../../../store/session-types-and-prices/session-types-and-prices.selector";
import { selectSendEmailSelectors } from "../../../store/send-email/send-email.slice";

import Loader from "../../../components/loader/loader.component";

const Loaders = () => {
  const { requestDateDataIsLoading } = useSelector(
    selectRequestDateDataSelectors
  );

  const { bookSessionIsLoading } = useSelector(selectBookSessionSelectors);
  const sessionPricesIsLoading = useSelector(selectGetPricesIsLoading);
  const { sendEmailIsLoading } = useSelector(selectSendEmailSelectors);

  return (
    <>
      {requestDateDataIsLoading ||
      bookSessionIsLoading ||
      sessionPricesIsLoading ||
      sendEmailIsLoading ? (
        <Loader />
      ) : null}
    </>
  );
};

export default Loaders;
