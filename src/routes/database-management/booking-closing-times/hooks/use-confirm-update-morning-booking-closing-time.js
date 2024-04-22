import useBookingClosingTimesVariables from "./use-booking-closing-times-variables";
import useBookingclosingTimesFunctions from "./use-booking-closing-times-functions";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useUpdateBookingClosingTimesThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-booking-closing-times-thunk";

import {
  confirmUpdateMorningSessionClosingTimeMessage,
  imSureMessage,
  newMorningSessionTimeInfoMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  timeIsInvalidErrorMessage,
  updateSessionClosingTimeFormatErrorMessage,
  sameTimeErrorMessage,
  chooseAnotherTimeMessage,
  sessionClosingTimesInfoMessage,
} from "../../../../strings/errors/errors-strings";

const useConfirmUpdateMorningBookingClosingTime = () => {
  const { morningSessionClosingTime, newMorningBookingClosingTime } =
    useBookingClosingTimesVariables();
  const { isValidTime } = useBookingclosingTimesFunctions();

  const { updateBookingClosingTimesThunk } =
    useUpdateBookingClosingTimesThunk();

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    const attributeToUpdate = "morningSessionClosingTime";
    const newTime = newMorningBookingClosingTime;
    updateBookingClosingTimesThunk(attributeToUpdate, newTime);
  };

  const confirmUpdateMorningBookingClosingTime = () => {
    if (
      !newMorningBookingClosingTime ||
      newMorningBookingClosingTime.length !== 5 ||
      !newMorningBookingClosingTime.includes(":")
    ) {
      fireSwal(
        "error",
        updateSessionClosingTimeFormatErrorMessage,
        "",
        0,
        true,
        false
      );
    } else if (!isValidTime(newMorningBookingClosingTime)) {
      fireSwal(
        "error",
        timeIsInvalidErrorMessage,
        sessionClosingTimesInfoMessage,
        0,
        true,
        false
      );
    } else if (newMorningBookingClosingTime === morningSessionClosingTime) {
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
        confirmUpdateMorningSessionClosingTimeMessage,
        newMorningSessionTimeInfoMessage(newMorningBookingClosingTime),
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUpdateMorningBookingClosingTime };
};

export default useConfirmUpdateMorningBookingClosingTime;
