import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../get-selectors/use-get-user-booking-to-delete-selectors";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

import {
  deleteUserBookingAsync,
  refundUserAsync,
  updateSessionSpacesDocAsync,
} from "../../../store/user-booking-to-delete/user-booking-to-delete.thunks";

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
            dispatch(
              updateSessionSpacesDocAsync({
                termDatesCollectionId,
                date,
                databaseId,
                sessionType,
                numberOfChildrenInBooking,
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
