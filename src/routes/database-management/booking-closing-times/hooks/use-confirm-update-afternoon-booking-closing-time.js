import useBookingClosingTimesVariables from "./use-booking-closing-times-variables";
import useBookingclosingTimesFunctions from "./use-booking-closing-times-functions";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useUpdateBookingClosingTimesThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-booking-closing-times-thunk";

import {
  confirmUpdateAfternoonSessionClosingTimeMessage,
  imSureMessage,
  newAfternoonSessionTimeInfoMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  sessionClosingTimesInfoMessage,
  timeIsInvalidErrorMessage,
  updateSessionClosingTimeFormatErrorMessage,
  sameTimeErrorMessage,
  chooseAnotherTimeMessage,
} from "../../../../strings/errors/errors-strings";

const useConfirmUpdateAfternoonBookingClosingTime = () => {
  const { afternoonSessionClosingTime, newAfternoonBookingClosingTime } =
    useBookingClosingTimesVariables();
  const { isValidTime } = useBookingclosingTimesFunctions();

  const { updateBookingClosingTimesThunk } =
    useUpdateBookingClosingTimesThunk();

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    const attributeToUpdate = "afternoonSessionClosingTime";
    const newTime = newAfternoonBookingClosingTime;
    updateBookingClosingTimesThunk(attributeToUpdate, newTime);
  };

  const confirmUpdateAfternoonBookingClosingTime = () => {
    if (
      !newAfternoonBookingClosingTime ||
      newAfternoonBookingClosingTime.length !== 5 ||
      !newAfternoonBookingClosingTime.includes(":")
    ) {
      fireSwal(
        "error",
        updateSessionClosingTimeFormatErrorMessage,
        "",
        0,
        true,
        false
      );
    } else if (!isValidTime(newAfternoonBookingClosingTime)) {
      fireSwal(
        "error",
        timeIsInvalidErrorMessage,
        sessionClosingTimesInfoMessage,
        0,
        true,
        false
      );
    } else if (newAfternoonBookingClosingTime === afternoonSessionClosingTime) {
      fireSwal(
        "error",
        sameTimeErrorMessage,
        chooseAnotherTimeMessage,
        0,
        true,
        false
      );
    } else {
      confirmSwal(
        confirmUpdateAfternoonSessionClosingTimeMessage,
        newAfternoonSessionTimeInfoMessage(newAfternoonBookingClosingTime),
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUpdateAfternoonBookingClosingTime };
};

export default useConfirmUpdateAfternoonBookingClosingTime;
