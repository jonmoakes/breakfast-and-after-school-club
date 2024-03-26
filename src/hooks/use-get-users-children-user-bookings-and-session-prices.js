import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getUsersChildrenAsync } from "../store/get-users-children/get-users-children.thunks";
import { fetchBookedSessionsUserAsync } from "../store/booked-sessions-user/booked-sessions-user.thunks";
import { getSessionPricesAsync } from "../store/session-types-and-prices/session-types-and-prices.thunks";
import { selectCurrentUserSelectors } from "../store/user/user.slice";

const useGetUsersChildrenUserBookingsAndSessionPrices = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { id } = currentUser;
  const {
    databaseId,
    childrenCollectionId: collectionId,
    bookedSessionsCollectionId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
  } = currentUserEnvironmentVariables;

  const location = useLocation();
  const dispatch = useDispatch();

  const path = location.pathname;

  useEffect(() => {
    dispatch(getUsersChildrenAsync({ id, databaseId, collectionId })).then(
      (resultAction) => {
        if (getUsersChildrenAsync.fulfilled.match(resultAction)) {
          dispatch(
            fetchBookedSessionsUserAsync({
              id,
              databaseId,
              bookedSessionsCollectionId,
            })
          ).then((resultAction) => {
            if (fetchBookedSessionsUserAsync.fulfilled.match(resultAction)) {
              const collectionId = sessionPricesCollectionId;
              const documentId = sessionPricesDocumentId;
              dispatch(
                getSessionPricesAsync({
                  databaseId,
                  collectionId,
                  documentId,
                })
              );
            }
          });
        }
      }
    );
  }, [
    dispatch,
    id,
    path,
    databaseId,
    collectionId,
    bookedSessionsCollectionId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
  ]);
};

export default useGetUsersChildrenUserBookingsAndSessionPrices;
