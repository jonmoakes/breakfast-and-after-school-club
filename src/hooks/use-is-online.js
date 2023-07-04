import { useEffect, useState } from "react";

const notBrowserError =
  "checking online status only works in a browser environment.";
const notABrowserEnv = typeof window === "undefined";
const navigatorNotPresent = typeof navigator === "undefined";

const useIsOnline = () => {
  const [isOnline, setOnlineStatus] = useState(window.navigator.onLine);

  useEffect(() => {
    const toggleOnlineStatus = () => setOnlineStatus(window.navigator.onLine);

    window.addEventListener("online", toggleOnlineStatus);
    window.addEventListener("offline", toggleOnlineStatus);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("online", toggleOnlineStatus);
      window.removeEventListener("offline", toggleOnlineStatus);
    };
  }, []);

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
