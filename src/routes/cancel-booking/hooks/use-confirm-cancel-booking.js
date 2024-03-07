import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetRefundPrice from "./use-get-refund-price";

import { selectUserBookingToDeleteSelectors } from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
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
  const { confirmSwal } = useConfirmSwal();
  let { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { userBookingToDelete } = useSelector(
    selectUserBookingToDeleteSelectors
  );

  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

  const dispatch = useDispatch();
  const { id } = currentUser;
  const { date, sessionType } = userBookingToDelete || {};
  const {
    databaseId,
    userCollectionId: collectionId,
    bookedSessionsCollectionId,
    termDatesCollectionId,
  } = currentUserEnvironmentVariables;

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
