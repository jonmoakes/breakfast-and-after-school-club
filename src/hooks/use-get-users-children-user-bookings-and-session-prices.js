import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "./get-selectors/use-get-current-user-selectors";

import { getUsersChildrenAsync } from "../store/get-users-children/get-users-children.thunks";
import { fetchBookedSessionsUserAsync } from "../store/booked-sessions-user/booked-sessions-user.thunks";
import { getSessionPricesAsync } from "../store/session-types-and-prices/session-types-and-prices.thunks";

const useGetUsersChildrenUserBookingsAndSessionPrices = () => {
  const {
    id,
    databaseId,
    childrenCollectionId: collectionId,
    bookedSessionsCollectionId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
  } = useGetCurrentUserSelectors();

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
