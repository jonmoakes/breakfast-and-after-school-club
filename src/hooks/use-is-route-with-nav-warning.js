import { useLocation } from "react-router-dom";

import {
  // confirmTravelDetailsRoute,
  // confirmCustomerDetailsRoute,
  payNowRoute,
} from "../strings/strings";

const useIsRouteWithNavWarning = () => {
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === payNowRoute ? true : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
