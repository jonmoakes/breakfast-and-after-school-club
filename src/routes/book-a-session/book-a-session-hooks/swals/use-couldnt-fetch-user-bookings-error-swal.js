import { useDispatch } from "react-redux";
import useFireSwal from "../../../../hooks/use-fire-swal";

import { resetError } from "../../../../store/user-bookings/user-bookings.slice";
import { requestUserCheckForDoubleCheckBookings } from "../../../../strings/strings";

const useCouldntFetchUserBookingsErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const couldntFetchUserBookingsErrorSwal = (
    confirmResult,
    sessionType,
    price
  ) => {
    fireSwal(
      "error",
      couldntFetchUserBookingsErrorSwal,
      requestUserCheckForDoubleCheckBookings,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetError());
        confirmResult(sessionType, price);
      }
    });
  };

  return { couldntFetchUserBookingsErrorSwal };
};

export default useCouldntFetchUserBookingsErrorSwal;
