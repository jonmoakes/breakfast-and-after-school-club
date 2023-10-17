import { useSelector } from "react-redux";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";

import { contactRoute } from "../../../../strings/strings";
import { selectUserBookingToDelete } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";

const useUpdateBalanceResultErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const userBookingToDelete = useSelector(selectUserBookingToDelete);

  const updateBalanceResultErrorSwal = () => {
    fireSwal(
      "error",
      "sorry, your booking was cancelled but there was an error updating your balance.",
      `please tap ok to contact us, quoting the following: 'update balance error - ${userBookingToDelete.sessionType}'`,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetStateAndNavigate(contactRoute);
      }
    });
  };

  return { updateBalanceResultErrorSwal };
};

export default useUpdateBalanceResultErrorSwal;
