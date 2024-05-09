import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../get-selectors/use-get-user-booking-to-delete-selectors";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";
import {
  deleteUserBookingAsync,
  refundUserAsync,
} from "../../../store/user-booking-to-delete/user-booking-to-delete.thunks";
//updateSessionSpacesAsync is shared, so put it in db management section.
import { updateSessionSpacesDocAsync } from "../../../store/database-management/database-management-thunks";
import { cancelBookingRoute } from "../../../strings/routes/routes-strings";

const useDeleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk =
  () => {
    const {
      id,
      databaseId,
      userCollectionId: collectionId,
      bookedSessionsCollectionId,
      termDatesCollectionId,
    } = useGetCurrentUserSelectors();
    const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();

    const dispatch = useDispatch();

    const { date, sessionType } = userBookingToDelete || {};

    const deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk =
      (numberOfChildrenInBooking, refundPrice) => {
        dispatch(
          deleteUserBookingAsync({
            userBookingToDelete,
            bookedSessionsCollectionId,
            databaseId,
          })
        ).then((resultAction) => {
          if (deleteUserBookingAsync.fulfilled.match(resultAction)) {
            const route = cancelBookingRoute;
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
            ).then((resultAction) => {
              if (updateSessionSpacesDocAsync.fulfilled.match(resultAction)) {
                dispatch(
                  refundUserAsync({ id, databaseId, collectionId, refundPrice })
                ).then((resultAction) => {
                  if (refundUserAsync.fulfilled.match(resultAction)) {
                    dispatch(
                      getUsersWalletBalanceAsync({
                        id,
                        databaseId,
                        collectionId,
                      })
                    );
                  }
                });
              }
            });
          }
        });
      };

    return {
      deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk,
    };
  };

export default useDeleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk;
