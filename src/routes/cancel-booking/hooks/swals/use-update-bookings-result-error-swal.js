import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";

import { selectUpdateBookingsDoc } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";

import { contactRoute } from "../../../../strings/strings";

const useUpdateBookingsResultErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const updateBookingsDoc = useSelector(selectUpdateBookingsDoc);

  const error = updateBookingsDoc.error;

  const updateBookingsResultErrorSwal = () => {
    fireSwal(
      "error",
      "sorry, there was an error cancelling your booking.",
      `tap ok to contact us, quoting the following error: '${error}'`,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetStateAndNavigate(contactRoute);
      }
    });
  };

  return { updateBookingsResultErrorSwal };
};

export default useUpdateBookingsResultErrorSwal;
