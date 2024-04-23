import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useSessionTimesSwals from "./use-session-times-swals";
import useSessionTimesVariables from "./use-session-times-variables";
import useSessionTimeFunctions from "./use-session-time-functions";
import useUpdateSessionTimesThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-times-thunk";

import {
  confirmUpdateAfternoonLongSessionTime,
  imSureMessage,
} from "../../../../strings/confirms/confirms-strings";

const useConfirmUpdateAfternoonLongSessionTimes = () => {
  const { newAfternoonLongSessionTime, afternoonLongSessionTime } =
    useSessionTimesVariables();
  const { validateNewTime } = useSessionTimeFunctions();
  const { showTimesAreTheSameSwal, showTimeFormattingErrorSwal } =
    useSessionTimesSwals();
  const { updateSessionTimesThunk } = useUpdateSessionTimesThunk();

  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    const attributeToUpdate = "afternoonLongSessionTime";
    const newTime = newAfternoonLongSessionTime;
    updateSessionTimesThunk(attributeToUpdate, newTime);
  };

  const checkForNewAfternoonLongSessionTimeErrorsAndConfirm = () => {
    if (!validateNewTime(newAfternoonLongSessionTime)) {
      showTimeFormattingErrorSwal();
    } else if (newAfternoonLongSessionTime === afternoonLongSessionTime) {
      showTimesAreTheSameSwal();
    } else {
      confirmSwal(
        confirmUpdateAfternoonLongSessionTime,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { checkForNewAfternoonLongSessionTimeErrorsAndConfirm };
};

export default useConfirmUpdateAfternoonLongSessionTimes;
