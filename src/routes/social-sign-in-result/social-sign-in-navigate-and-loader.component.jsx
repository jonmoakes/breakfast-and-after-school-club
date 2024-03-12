import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import Loader from "../../components/loader/loader.component";

import { accountRoute } from "../../strings/routes/routes-strings";

const SocialSignInNavigateAndLoader = () => {
  const { currentUser, currentUserIsLoading } = useSelector(
    selectCurrentUserSelectors
  );

  return (
    <>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {currentUserIsLoading ? <Loader /> : null}
    </>
  );
};

export default SocialSignInNavigateAndLoader;
