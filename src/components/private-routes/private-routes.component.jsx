import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { signInRoute } from "../../strings/strings";

const PrivateRoutes = () => {
  const currentUser = useSelector(selectCurrentUser);
  return <>{currentUser ? <Outlet /> : <Navigate to={signInRoute} />}</>;
};

export default PrivateRoutes;
