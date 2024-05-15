import useGetUserBookingToDeleteSelectors from "../../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import {
  couldntFindBookingToCancelMessage,
  errorCancellingBookingMessage,
  errorReceivedMessage,
} from "../../../../strings/errors/errors-strings";
import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

const useUpdateBookingsResultErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { updateBookingsError: error } = useGetUserBookingToDeleteSelectors();

  const updateBookingsResultErrorSwal = () => {
    if (error === "booking not found") {
      fireSwal(
        "error",
        couldntFindBookingToCancelMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(bookedSessionsUserRoute);
        }
      });
    } else {
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
    }
  };

  return { updateBookingsResultErrorSwal };
};

export default useUpdateBookingsResultErrorSwal;
