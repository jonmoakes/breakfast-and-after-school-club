import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getUsersChildrenAsync } from "../store/get-users-children/get-users-children-slice";
import { getUserBookingsAsync } from "../store/user-bookings/user-bookings.slice";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../store/user/user.selector";
import { bookSessionRoute, childInfoRoute } from "../strings/strings";

const useGetUsersChildrenAndConditionallyUserBookings = () => {
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { email } = currentUser;
  const { databaseId, childrenCollectionId: collectionId } = envVariables;

  const location = useLocation();
  const dispatch = useDispatch();

  const path = location.pathname;

  useEffect(() => {
    if (path === childInfoRoute) {
      dispatch(
        getUsersChildrenAsync({
          email,
          databaseId,
          collectionId,
        })
      );
    } else if (path === bookSessionRoute) {
      dispatch(getUsersChildrenAsync({ email })).then((resultAction) => {
        if (getUsersChildrenAsync.fulfilled.match(resultAction)) {
          dispatch(getUserBookingsAsync({ email }));
        }
      });
    }
  }, [dispatch, email, path, databaseId, collectionId]);
};

export default useGetUsersChildrenAndConditionallyUserBookings;
