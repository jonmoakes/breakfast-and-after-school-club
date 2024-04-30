import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionTimesSwals from "./use-session-times-swals";
import useSessionTimesVariables from "./use-session-times-variables";
import useSessionTimeFunctions from "./use-session-time-functions";
import useUpdateSessionTimesThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-times-thunk";

import {
  confirmUpdateAfternoonShortSessionTime,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUpdateAfternoonShortSessionTimes = () => {
  const { newAfternoonShortSessionTime, afternoonShortSessionTime } =
    useSessionTimesVariables();
  const { validateNewTime } = useSessionTimeFunctions();
  const { showTimesAreTheSameSwal, showTimeFormattingErrorSwal } =
    useSessionTimesSwals();
  const { updateSessionTimesThunk } = useUpdateSessionTimesThunk();

  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    const attributeToUpdate = "afternoonShortSessionTime";
    const newTime = newAfternoonShortSessionTime;
    updateSessionTimesThunk(attributeToUpdate, newTime);
  };

  const checkForNewAfternoonShortSessionTimeErrorsAndConfirm = () => {
    if (!validateNewTime(newAfternoonShortSessionTime)) {
      showTimeFormattingErrorSwal();
    } else if (newAfternoonShortSessionTime === afternoonShortSessionTime) {
      showTimesAreTheSameSwal();
    } else {
      confirmSwal(
        confirmUpdateAfternoonShortSessionTime,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { checkForNewAfternoonShortSessionTimeErrorsAndConfirm };
};

export default useConfirmUpdateAfternoonShortSessionTimes;
