import useShowLoadersLogic from "../book-a-session-hooks/logic/use-show-loaders-logic";

import Loader from "../../../components/loader/loader.component";

const BookSessionLoaders = () => {
  const { showLoaders } = useShowLoadersLogic();

  return <>{showLoaders() ? <Loader /> : null}</>;
};

export default BookSessionLoaders;
