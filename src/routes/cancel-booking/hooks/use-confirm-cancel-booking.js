import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetRefundPrice from "./use-get-refund-price";

import { selectUserBookingToDelete } from "../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  deleteUserBookingAsync,
  refundUserAsync,
  updateSessionSpacesDocAsync,
} from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import {
  confirmCancelBookingMessage,
  fundsReaddedToAccountMessage,
  imSureMessage,
} from "../../../strings/strings";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.actions";

const useConfirmDeleteChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();
  let { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();

  const currentUser = useSelector(selectCurrentUser);
  const userBookingToDelete = useSelector(selectUserBookingToDelete);
  const usersChildren = useSelector(selectUsersChildren);

  const dispatch = useDispatch();
  const { id } = currentUser;
  const { date, sessionType } = userBookingToDelete || {};

  refundPrice = usersChildren.length === 1 ? refundPrice : totalRefundPrice;

  const confirmResult = () => {
    dispatch(deleteUserBookingAsync({ userBookingToDelete })).then(
      (resultAction) => {
        if (deleteUserBookingAsync.fulfilled.match(resultAction)) {
          dispatch(
            updateSessionSpacesDocAsync({
              date,
              sessionType,
              numberOfChildrenInBooking,
            })
          ).then((resultAction) => {
            if (updateSessionSpacesDocAsync.fulfilled.match(resultAction)) {
              dispatch(refundUserAsync({ id, refundPrice })).then(
                (resultAction) => {
                  if (refundUserAsync.fulfilled.match(resultAction)) {
                    dispatch(getUsersWalletBalanceAsync({ id }));
                  }
                }
              );
            }
          });
        }
      }
    );
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
