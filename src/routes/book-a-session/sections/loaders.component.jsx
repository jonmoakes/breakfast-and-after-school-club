import { useSelector } from "react-redux";

import { selectRequestDateDataIsLoading } from "../../store/request-date-data/request-date-data.selector";
import { selectBookSessionIsLoading } from "../../store/book-session/book-session.selector";
import { selectGetPricesIsLoading } from "../../store/session-types-and-prices/session-types-and-prices.selector";

import Loader from "../../components/loader/loader.component";

const Loaders = () => {
  const requestDateDataIsLoading = useSelector(selectRequestDateDataIsLoading);
  const bookSessionIsLoading = useSelector(selectBookSessionIsLoading);
  const sessionPricesIsLoading = useSelector(selectGetPricesIsLoading);

  return (
    <>
      {requestDateDataIsLoading ||
      bookSessionIsLoading ||
      sessionPricesIsLoading ? (
        <Loader />
      ) : null}
    </>
  );
};

export default Loaders;
