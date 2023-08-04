import { useLocation } from "react-router-dom";

import { addFundsRoute, bookSessionRoute } from "../strings/strings";

const useIsRouteWithNavWarning = () => {
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === bookSessionRoute || path === addFundsRoute ? true : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
