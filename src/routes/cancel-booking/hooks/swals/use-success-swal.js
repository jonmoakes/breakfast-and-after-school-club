import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useSendCancellationEmailThunk from "../../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-cancellation-email-thunk";
import useGetSessionPrice from "../../../../hooks/use-get-session-price";
import useCancelBookingVariables from "../use-cancel-booking-variables";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import {
  cancelBookingConfirmSendEmailMessage,
  sendEmailButtonText,
} from "../../../../strings/confirms/confirms-strings";

import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

const useSuccessSwal = () => {
  const { dispatchResetCurrentUserWalletBalanceResult } =
    useCurrentUserActions();
  const { sendCancellationEmailThunk } = useSendCancellationEmailThunk();
  const { sessionType, numberOfChildrenInBooking } =
    useCancelBookingVariables();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { sessionPrice } = useGetSessionPrice(
    sessionType,
    numberOfChildrenInBooking
  );

  const successSwal = () => {
    const confirmResult = () => {
      dispatchResetCurrentUserWalletBalanceResult();
      sendCancellationEmailThunk(sessionPrice);
    };

    const cancelResult = () => {
      dispatchResetCurrentUserWalletBalanceResult();
      hamburgerHandlerNavigate(bookedSessionsUserRoute);
    };

    confirmSwal(
      cancelBookingConfirmSendEmailMessage,
      "",
      sendEmailButtonText,
      () => confirmResult(),
      () => cancelResult()
    );
  };

  return { successSwal };
};

export default useSuccessSwal;
