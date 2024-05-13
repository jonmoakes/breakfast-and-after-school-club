import useCancelBookingUpdateBalanceUpdateSessionThunks from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-cancel-booking-update-balance-update-session-thunks";
import useCancelBookingUpdateSessionThunks from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-cancel-booking-update-session-thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  confirmCancelBookingMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import useDbManageCancelBookingVariables from "./use-db-manage-cancel-booking-variables";

const useConfirmDbManageCancelBooking = () => {
  const { confirmSwal } = useConfirmSwal();
  const { cancelBookingUpdateBalanceUpdateSessionThunks } =
    useCancelBookingUpdateBalanceUpdateSessionThunks();
  const { cancelBookingUpdateSessionThunks } =
    useCancelBookingUpdateSessionThunks();
  const { userOfAppChoice } = useDbManageCancelBookingVariables();

  const confirmResult = (
    bookingId,
    userIdOfParent,
    sessionPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking
  ) => {
    if (userOfAppChoice === "user") {
      cancelBookingUpdateBalanceUpdateSessionThunks(
        bookingId,
        userIdOfParent,
        sessionPrice,
        sessionDate,
        typeOfSession,
        numberOfChildrenInBooking
      );
    } else if (userOfAppChoice === "non user") {
      cancelBookingUpdateSessionThunks(
        bookingId,
        sessionDate,
        typeOfSession,
        numberOfChildrenInBooking
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
