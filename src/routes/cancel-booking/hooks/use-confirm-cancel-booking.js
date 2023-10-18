import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetRefundPrice from "./use-get-refund-price";

import { selectUserBookingToDelete } from "../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  deleteUserBookingAsync,
  refundUserAsync,
} from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import {
  confirmCancelBookingMessage,
  fundsReaddedToAccountMessage,
  imSureMessage,
} from "../../../strings/strings";

const useConfirmDeleteChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();
  let { refundPrice, totalRefundPrice } = useGetRefundPrice();

  const currentUser = useSelector(selectCurrentUser);
  const userBookingToDelete = useSelector(selectUserBookingToDelete);
  const usersChildren = useSelector(selectUsersChildren);

  const dispatch = useDispatch();
  const { id } = currentUser;

  refundPrice = usersChildren.length === 1 ? refundPrice : totalRefundPrice;

  const confirmResult = () => {
    if (usersChildren.length === 1) {
      dispatch(deleteUserBookingAsync({ userBookingToDelete })).then(
        (resultAction) => {
          if (deleteUserBookingAsync.fulfilled.match(resultAction)) {
            dispatch(refundUserAsync({ id, refundPrice }));
          }
        }
      );
    } else if (usersChildren.length > 1) {
      dispatch(deleteUserBookingAsync({ userBookingToDelete })).then(
        (resultAction) => {
          if (deleteUserBookingAsync.fulfilled.match(resultAction)) {
            dispatch(refundUserAsync({ id, refundPrice }));
          }
        }
      );
    }
  };

  const confirmCancelBooking = () => {
    if (usersChildren.length === 1) {
      confirmSwal(
        confirmCancelBookingMessage,
        fundsReaddedToAccountMessage(refundPrice / 100),
        imSureMessage,
        confirmResult
      );
    } else if (usersChildren.length > 1) {
      confirmSwal(
        confirmCancelBookingMessage,
        fundsReaddedToAccountMessage(totalRefundPrice / 100),
        imSureMessage,
        confirmResult
      );
    }
  };

  return { confirmCancelBooking };
};

export default useConfirmDeleteChildInfo;
