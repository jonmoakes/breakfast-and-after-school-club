import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  selectCurrentUser,
  selectIsUserLoading,
} from "../../store/user/user.selector";

import Loader from "../../components/loader/loader.component";

import { accountRoute } from "../../strings/strings";

const NavigateAndLoader = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsUserLoading);

  return (
    <>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {isLoading ? <Loader /> : null}
    </>
  );
};

export default NavigateAndLoader;
