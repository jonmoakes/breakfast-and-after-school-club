import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../get-selectors/use-get-user-booking-to-delete-selectors";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";
import { deleteUserBookingAsync } from "../../../store/user-booking-to-delete/user-booking-to-delete.thunks";
//updateSessionSpacesAsync and balance is shared, so put it in db management section.
import {
  updateSessionSpacesDocAsync,
  updateUsersBalanceAsync,
} from "../../../store/database-management/database-management-thunks";
import { cancelBookingRoute } from "../../../strings/routes/routes-strings";

const useDeleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk =
  () => {
    const {
      id,
      databaseId,
      userCollectionId,
      bookedSessionsCollectionId,
      termDatesCollectionId,
    } = useGetCurrentUserSelectors();
    const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();

    const dispatch = useDispatch();

    const { date, sessionType, $id } = userBookingToDelete || {};

    const deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk =
      (numberOfChildrenInBooking, sessionPrice) => {
        dispatch(
          deleteUserBookingAsync({
            $id,
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
                const usersDocumentId = id;
                const operation = "add";

                dispatch(
                  updateUsersBalanceAsync({
                    usersDocumentId,
                    databaseId,
                    userCollectionId,
                    sessionPrice,
                    operation,
                  })
                ).then((resultAction) => {
                  if (updateUsersBalanceAsync.fulfilled.match(resultAction)) {
                    dispatch(
                      getUsersWalletBalanceAsync({
                        id,
                        databaseId,
                        collectionId: userCollectionId,
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
