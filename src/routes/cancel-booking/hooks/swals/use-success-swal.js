import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";

import {
  bookingCancelledMessage,
  userBookingsRoute,
  walletBeenUpdatedMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const successSwal = () => {
    fireSwal(
      "success",
      bookingCancelledMessage,
      walletBeenUpdatedMessage,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetStateAndNavigate(userBookingsRoute);
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
