import { useDispatch } from "react-redux";

import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetRefundPrice from "./use-get-refund-price";

import {
  deleteUserBookingAsync,
  refundUserAsync,
  updateSessionSpacesDocAsync,
} from "../../../store/user-booking-to-delete/user-booking-to-delete.thunks";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

import {
  confirmCancelBookingMessage,
  fundsReaddedToAccountMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteChildInfo = () => {
  const { usersChildren } = useGetUsersChildrenSelectors();
  const {
    id,
    databaseId,
    userCollectionId: collectionId,
    bookedSessionsCollectionId,
    termDatesCollectionId,
  } = useGetCurrentUserSelectors();
  const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();
  const { confirmSwal } = useConfirmSwal();
  let { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();

  const dispatch = useDispatch();

  const { date, sessionType } = userBookingToDelete || {};
  refundPrice = usersChildren.length === 1 ? refundPrice : totalRefundPrice;

  const confirmResult = () => {
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

  const confirmCancelBooking = () => {
    confirmSwal(
      confirmCancelBookingMessage,
      fundsReaddedToAccountMessage(refundPrice / 100),
      imSureMessage,
      confirmResult
    );
  };

  return { confirmCancelBooking };
};

export default useConfirmDeleteChildInfo;
