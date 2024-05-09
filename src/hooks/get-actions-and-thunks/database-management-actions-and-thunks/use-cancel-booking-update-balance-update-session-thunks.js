import { useDispatch } from "react-redux";

import {
  deleteDocumentAsync,
  updateSessionSpacesDocAsync,
  updateUsersBalanceAsync,
} from "../../../store/database-management/database-management-thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { databaseManagementCancelBookingRoute } from "../../../strings/routes/routes-strings";

const useCancelBookingUpdateBalanceUpdateSessionThunks = () => {
  const {
    databaseId,
    bookedSessionsCollectionId,
    userCollectionId,
    termDatesCollectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const cancelBookingUpdateBalanceUpdateSessionThunks = (
    bookingId,
    userIdOfParent,
    refundPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking
  ) => {
    const collectionId = bookedSessionsCollectionId;
    const documentId = bookingId;

    dispatch(
      deleteDocumentAsync({
        databaseId,
        collectionId,
        documentId,
      })
    ).then((resultAction) => {
      if (deleteDocumentAsync.fulfilled.match(resultAction)) {
        const usersDocumentId = userIdOfParent;
        dispatch(
          updateUsersBalanceAsync({
            usersDocumentId,
            databaseId,
            userCollectionId,
            refundPrice,
          })
        ).then((resultAction) => {
          if (updateUsersBalanceAsync.fulfilled.match(resultAction)) {
            const date = sessionDate;
            const sessionType = typeOfSession;
            const route = databaseManagementCancelBookingRoute;
            const operation = "add";
            dispatch(
              updateSessionSpacesDocAsync({
                numberOfChildrenInBooking,
                date,
                databaseId,
                termDatesCollectionId,
                route,
                sessionType,
                operation,
              })
            );
          }
        });
      }
    });
  };

  return { cancelBookingUpdateBalanceUpdateSessionThunks };
};

export default useCancelBookingUpdateBalanceUpdateSessionThunks;
