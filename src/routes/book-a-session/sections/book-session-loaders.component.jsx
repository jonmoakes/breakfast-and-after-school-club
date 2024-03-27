import useGetSendEmailSelectors from "../../../hooks/get-selectors/use-get-send-email-selectors";
import useShowLoadersLogic from "../book-a-session-hooks/logic/use-show-loaders-logic";

import Loader from "../../../components/loader/loader.component";

const BookSessionLoaders = () => {
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { showLoaders } = useShowLoadersLogic();

  return <>{showLoaders() || sendEmailIsLoading ? <Loader /> : null}</>;
};

export default BookSessionLoaders;
