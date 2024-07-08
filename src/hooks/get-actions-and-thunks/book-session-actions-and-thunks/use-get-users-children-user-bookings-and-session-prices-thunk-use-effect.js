import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { getUsersChildrenAsync } from "../../../store/get-users-children/get-users-children.thunks";
import { fetchBookedSessionsUserFromTodayOnwardsAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";
import { getSessionPricesAsync } from "../../../store/session-types-and-prices/session-types-and-prices.thunks";

const useGetUsersChildrenUserBookingsAndSessionPricesThunkUseEffect = () => {
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

  const agreeChecked = localStorage.getItem("agreeChecked");

  useEffect(() => {
    if (!agreeChecked) return;
    dispatch(getUsersChildrenAsync({ id, databaseId, collectionId })).then(
      (resultAction) => {
        if (getUsersChildrenAsync.fulfilled.match(resultAction)) {
          dispatch(
            fetchBookedSessionsUserFromTodayOnwardsAsync({
              id,
              databaseId,
              bookedSessionsCollectionId,
            })
          ).then((resultAction) => {
            if (
              fetchBookedSessionsUserFromTodayOnwardsAsync.fulfilled.match(
                resultAction
              )
            ) {
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
    agreeChecked,
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

export default useGetUsersChildrenUserBookingsAndSessionPricesThunkUseEffect;
