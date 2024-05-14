import useUpdateSessionSpacesRemoveBookingThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/cancel-booking/use-update-session-spaces-remove-booking-thunk";
import useUpdateBalanceUpdateSessionSpacesRemoveBookingThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/cancel-booking/use-update-balance-update-session-spaces-remove-booking-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useDbManageCancelBookingVariables from "./use-db-manage-cancel-booking-variables";

import {
  confirmCancelBookingMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDbManageCancelBooking = () => {
  const { confirmSwal } = useConfirmSwal();
  const { updateSessionSpacesRemoveBookingThunk } =
    useUpdateSessionSpacesRemoveBookingThunk();
  const { updateBalanceUpdateSessionSpacesRemoveBookingThunk } =
    useUpdateBalanceUpdateSessionSpacesRemoveBookingThunk();
  const { userOfAppChoice } = useDbManageCancelBookingVariables();

  const confirmResult = (
    bookingId,
    userIdOfParent,
    sessionPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking
  ) => {
    if (userOfAppChoice === "non user") {
      updateSessionSpacesRemoveBookingThunk(
        sessionDate,
        typeOfSession,
        numberOfChildrenInBooking,
        bookingId
      );
    } else if (userOfAppChoice === "user") {
      updateBalanceUpdateSessionSpacesRemoveBookingThunk(
        userIdOfParent,
        sessionPrice,
        sessionDate,
        typeOfSession,
        numberOfChildrenInBooking,
        bookingId
      );
    }
  };

  const confirmDbManageCancelBooking = (
    bookingId,
    userIdOfParent,
    sessionPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking
  ) => {
    confirmSwal(confirmCancelBookingMessage, "", imSureMessage, () =>
      confirmResult(
        bookingId,
        userIdOfParent,
        sessionPrice,
        sessionDate,
        typeOfSession,
        numberOfChildrenInBooking
      )
    );
  };

  return { confirmDbManageCancelBooking };
};

export default useConfirmDbManageCancelBooking;
