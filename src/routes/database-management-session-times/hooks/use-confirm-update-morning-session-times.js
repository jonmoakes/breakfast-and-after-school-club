import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionTimesSwals from "./use-session-times-swals";
import useSessionTimesVariables from "./use-session-times-variables";
import useSessionTimeFunctions from "./use-session-time-functions";
import useUpdateSessionTimesThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-times-thunk";

import {
  confirmUpdateMorningSessionTime,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUpdateMorningSessionTimes = () => {
  const { newMorningSessionTime, morningSessionTime } =
    useSessionTimesVariables();
  const { validateNewTime } = useSessionTimeFunctions();
  const { showTimesAreTheSameSwal, showTimeFormattingErrorSwal } =
    useSessionTimesSwals();
  const { updateSessionTimesThunk } = useUpdateSessionTimesThunk();

  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    const attributeToUpdate = "morningSessionTime";
    const newTime = newMorningSessionTime;
    updateSessionTimesThunk(attributeToUpdate, newTime);
  };

  const checkForNewMorningSessionTimeErrorsAndConfirm = () => {
    if (!validateNewTime(newMorningSessionTime)) {
      showTimeFormattingErrorSwal();
    } else if (newMorningSessionTime === morningSessionTime) {
      showTimesAreTheSameSwal();
    } else {
      confirmSwal(confirmUpdateMorningSessionTime, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  return { checkForNewMorningSessionTimeErrorsAndConfirm };
};

export default useConfirmUpdateMorningSessionTimes;
