import { Navigate } from "react-router-dom";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import Loader from "../../../components/loader/loader.component";

import { accountRoute } from "../../../strings/routes/routes-strings";

const HandleNavigateAndLoader = () => {
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();

  return (
    <>
      {currentUser !== null && currentUser !== undefined && (
        <Navigate replace to={accountRoute} />
      )}
      {currentUserIsLoading ? <Loader /> : null}
    </>
  );
};

export default HandleNavigateAndLoader;
