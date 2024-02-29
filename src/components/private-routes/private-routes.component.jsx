import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import { signInRoute } from "../../strings/strings";

const PrivateRoutes = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  return <>{currentUser ? <Outlet /> : <Navigate to={signInRoute} />}</>;
};

export default PrivateRoutes;
