import { useSelector } from "react-redux";

import useShowLoadersLogic from "../book-a-session-hooks/logic/use-show-loaders-logic";

import { selectSendEmailSelectors } from "../../../store/send-email/send-email.slice";

import Loader from "../../../components/loader/loader.component";

const BookSessionLoaders = () => {
  const { showLoaders } = useShowLoadersLogic();

  const { sendEmailIsLoading } = useSelector(selectSendEmailSelectors);

  return <>{showLoaders() || sendEmailIsLoading ? <Loader /> : null}</>;
};

export default BookSessionLoaders;
