import { useSelector } from "react-redux";

import { selectIsOnlineSelectors } from "../../store/is-online/is-online.slice";

const useGetIsOnlineSelectors = () => {
  const { isOnline } = useSelector(selectIsOnlineSelectors);

  return { isOnline };
};

export default useGetIsOnlineSelectors;
