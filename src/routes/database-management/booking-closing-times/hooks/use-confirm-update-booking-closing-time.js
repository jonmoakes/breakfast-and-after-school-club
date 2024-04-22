import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  confirmUpdateMorningSessionClosingTimeMessage,
  imSureMessage,
  newMorningSessionTimeInfoMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  morningSessionClosingTimesInfoMessage,
  timeIsInvalidErrorMessage,
  updateSessionClosingTimeFormatErrorMessage,
  sameTimeErrorMessage,
  chooseAnotherTimeMessage,
} from "../../../../strings/errors/errors-strings";

const useConfirmUpdateBookingClosingTime = () => {
  const { newMorningBookingClosingTime } = useGetDatabaseManagementSelectors();
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  const { morningSessionClosingTime } = bookingClosingTimes || {};

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    console.log("confirm here");
  };

  const isValidTime = () => {
    const [hours, minutes] = newMorningBookingClosingTime.split(":");

    if (hours < "00" || hours > "09" || minutes < "00" || minutes > "59") {
      return false;
    }
    return true;
  };

  const confirmUpdateBookingClosingTime = () => {
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
    } else if (!isValidTime()) {
      fireSwal(
        "error",
        timeIsInvalidErrorMessage,
        morningSessionClosingTimesInfoMessage,
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

  return { confirmUpdateBookingClosingTime };
};

export default useConfirmUpdateBookingClosingTime;
