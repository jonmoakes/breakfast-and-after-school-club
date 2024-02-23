import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOnlineStatus,
  selectIsOnlineSelectors,
} from "../store/is-online/is-online.slice";

const notBrowserError =
  "checking online status only works in a browser environment.";
const notABrowserEnv = typeof window === "undefined";
const navigatorNotPresent = typeof navigator === "undefined";

const useIsOnline = () => {
  const { isOnline } = useSelector(selectIsOnlineSelectors);
  const dispatch = useDispatch();

  useEffect(() => {
    const toggleOnlineStatus = () =>
      dispatch(setOnlineStatus(window.navigator.onLine));

    window.addEventListener("online", toggleOnlineStatus);
    window.addEventListener("offline", toggleOnlineStatus);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("online", toggleOnlineStatus);
      window.removeEventListener("offline", toggleOnlineStatus);
    };
  }, [dispatch]);

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
