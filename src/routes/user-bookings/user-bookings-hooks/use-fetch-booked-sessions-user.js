import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookedSessionsUserAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useFetchBookedSessionsUser = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const dispatch = useDispatch();

  const { email } = currentUser;
  const { databaseId, bookedSessionsCollectionId } =
    currentUserEnvironmentVariables;

  useEffect(() => {
    if (!currentUser) return;
    dispatch(
      fetchBookedSessionsUserAsync({
        email,
        databaseId,
        bookedSessionsCollectionId,
      })
    );
  }, [dispatch, currentUser, email, databaseId, bookedSessionsCollectionId]);
};

export default useFetchBookedSessionsUser;
