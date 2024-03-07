import { useLocation } from "react-router-dom";

import {
  addChildInfoRoute,
  addFundsRoute,
  bookSessionRoute,
  cancelBookingRoute,
} from "../strings/routes/routes-strings";

const useIsRouteWithNavWarning = () => {
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === bookSessionRoute ||
      path === addFundsRoute ||
      path === addChildInfoRoute ||
      path === cancelBookingRoute
      ? true
      : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
