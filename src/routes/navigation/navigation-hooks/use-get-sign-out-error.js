import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetCurrentUserErrorMessage,
  selectCurrentUserSelectors,
} from "../../../store/user/user.slice";

import {
  appwriteNoUserError,
  appwriteIdAlreadyExistsError,
} from "../../../strings/strings";

const useGetSignOutError = () => {
  const { fireSwal } = useFireSwal();

  const { currentUser, currentUserError } = useSelector(
    selectCurrentUserSelectors
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      currentUserError === appwriteNoUserError ||
      currentUserError === appwriteIdAlreadyExistsError
    )
      return;

    if (currentUserError && currentUserError !== appwriteNoUserError) {
      fireSwal("error", currentUserError, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetCurrentUserErrorMessage());
          }
        }
      );
    }
  }, [fireSwal, currentUser, dispatch, currentUserError]);
};

export default useGetSignOutError;
