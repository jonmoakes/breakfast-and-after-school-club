import useCancelBookingUpdateBalanceUpdateSessionThunks from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-cancel-booking-update-balance-update-session-thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  confirmCancelBookingMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDbManageCancelBooking = () => {
  const { confirmSwal } = useConfirmSwal();
  const { cancelBookingUpdateBalanceUpdateSessionThunks } =
    useCancelBookingUpdateBalanceUpdateSessionThunks();

  const confirmResult = (
    bookingId,
    userIdOfParent,
    refundPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking
  ) => {
    cancelBookingUpdateBalanceUpdateSessionThunks(
      bookingId,
      userIdOfParent,
      refundPrice,
      sessionDate,
      typeOfSession,
      numberOfChildrenInBooking
    );
  };

  const confirmDbManageCancelBooking = (
    bookingId,
    userIdOfParent,
    refundPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking
  ) => {
    confirmSwal(confirmCancelBookingMessage, "", imSureMessage, () =>
      confirmResult(
        bookingId,
        userIdOfParent,
        refundPrice,
        sessionDate,
        typeOfSession,
        numberOfChildrenInBooking
      )
    );
  };

  return { confirmDbManageCancelBooking };
};

export default useConfirmDbManageCancelBooking;
