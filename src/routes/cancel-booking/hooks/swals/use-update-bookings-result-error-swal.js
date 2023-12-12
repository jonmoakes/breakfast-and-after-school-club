import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectUpdateBookingsDoc } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";

import {
  errorCancellingBookingMessage,
  errorReceivedMessage,
  userBookingsRoute,
} from "../../../../strings/strings";

const useUpdateBookingsResultErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const updateBookingsDoc = useSelector(selectUpdateBookingsDoc);

  const error = updateBookingsDoc.error;

  const updateBookingsResultErrorSwal = () => {
    fireSwal(
      "error",
      errorCancellingBookingMessage,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(userBookingsRoute);
      }
    });
  };

  return { updateBookingsResultErrorSwal };
};

export default useUpdateBookingsResultErrorSwal;
