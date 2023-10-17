import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";

import { userBookingsRoute } from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const successSwal = () => {
    fireSwal(
      "success",
      "booking cancelled",
      "and your wallet has been updated",
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
