import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

const PrivateRoutes = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  return <>{currentUser ? <Outlet /> : null}</>;
};

export default PrivateRoutes;
