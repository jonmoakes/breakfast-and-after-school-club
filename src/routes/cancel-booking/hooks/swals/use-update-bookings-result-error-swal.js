import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectUserBookingToDeleteSelectors } from "../../../../store/user-booking-to-delete/user-booking-to-delete.slice";

import {
  errorCancellingBookingMessage,
  errorReceivedMessage,
  bookedSessionsUserRoute,
} from "../../../../strings/strings";

const useUpdateBookingsResultErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { updateBookingsDoc } = useSelector(selectUserBookingToDeleteSelectors);

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
        hamburgerHandlerNavigate(bookedSessionsUserRoute);
      }
    });
  };

  return { updateBookingsResultErrorSwal };
};

export default useUpdateBookingsResultErrorSwal;
