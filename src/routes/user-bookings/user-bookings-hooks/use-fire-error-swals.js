import useFireSwal from "../../../hooks/use-fire-swal";
import {
  cancelBeforeTimeMessage,
  tooLateToCancelAfternoonMessage,
  cantCancelPastBookingMessage,
  tooLateToCancelMorningMessage,
} from "../../../strings/strings";

const useFireErrorSwals = () => {
  const { fireSwal } = useFireSwal();

  const cantCancelPastBookingSwal = () => {
    fireSwal("error", cantCancelPastBookingMessage, "", 0, true, false);
  };

  const cantCancelMorningSessionSwal = () => {
    const hour = "6AM";
    fireSwal(
      "error",
      tooLateToCancelMorningMessage,
      cancelBeforeTimeMessage(hour),
      0,
      true,
      false
    );
  };

  const cantCancelAfternoonSessionSwal = () => {
    const hour = "2PM";
    fireSwal(
      "error",
      tooLateToCancelAfternoonMessage,
      cancelBeforeTimeMessage(hour),
      0,
      true,
      false
    );
  };

  return {
    cantCancelPastBookingSwal,
    cantCancelMorningSessionSwal,
    cantCancelAfternoonSessionSwal,
  };
};

export default useFireErrorSwals;
