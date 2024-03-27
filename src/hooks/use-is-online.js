import { useEffect } from "react";

import useGetIsOnlineSelectors from "./get-selectors/use-get-is-online-selectors";
import useIsOnlineActions from "./get-actions-and-thunks/use-is-online-actions";

const notBrowserError =
  "checking online status only works in a browser environment.";
const notABrowserEnv = typeof window === "undefined";
const navigatorNotPresent = typeof navigator === "undefined";

const useIsOnline = () => {
  const { isOnline } = useGetIsOnlineSelectors();
  const { dispatchSetOnlineStatus } = useIsOnlineActions();

  useEffect(() => {
    const toggleOnlineStatus = () =>
      dispatchSetOnlineStatus(window.navigator.onLine);

    window.addEventListener("online", toggleOnlineStatus);
    window.addEventListener("offline", toggleOnlineStatus);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("online", toggleOnlineStatus);
      window.removeEventListener("offline", toggleOnlineStatus);
    };
  }, [dispatchSetOnlineStatus]);

  if (notABrowserEnv || navigatorNotPresent) {
    return {
      error: notBrowserError,
      isOnline: false,
    };
  }

  return {
    error: null,
    isOnline,
  };
};

export default useIsOnline;
