import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";

import {
  addSessionBookingInfoErrorMessage,
  contactRoute,
} from "../../../../strings/strings";

const useAddSessionBookingInfoErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const addSessionBookingInfoErrorSwal = () => {
    fireSwal(
      "error",
      addSessionBookingInfoErrorMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetStateAndNavigate(contactRoute);
      }
    });
  };

  return { addSessionBookingInfoErrorSwal };
};

export default useAddSessionBookingInfoErrorSwal;
