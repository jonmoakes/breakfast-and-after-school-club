import useFireSwal from "../../../hooks/use-fire-swal";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useRequestDateDataActions from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-date-data-actions";

import {
  cancelBeforeTimeMessage,
  tooLateToCancelAfternoonMessage,
  tooLateToCancelMorningMessage,
  tryingToCancelErrorMessage,
} from "../../../strings/errors/errors-strings";

const useFireErrorSwals = () => {
  const { requestDateDataError } = useGetRequestDateDataSelectors();
  const { fireSwal } = useFireSwal();
  const { dispatchResetRequestDateDataError } = useRequestDateDataActions();

  const couldntFetchBookingClosingTimesSwal = () => {
    fireSwal(
      "error",
      tryingToCancelErrorMessage(requestDateDataError),
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetRequestDateDataError();
      }
    });
  };

  const cantCancelMorningSessionSwal = (morningSessionClosingTime) => {
    const time = morningSessionClosingTime;
    fireSwal(
      "error",
      tooLateToCancelMorningMessage,
      cancelBeforeTimeMessage(time),
      0,
      true,
      false
    );
  };

  const cantCancelAfternoonSessionSwal = (afternoonSessionClosingTime) => {
    const time = afternoonSessionClosingTime;
    fireSwal(
      "error",
      tooLateToCancelAfternoonMessage,
      cancelBeforeTimeMessage(time),
      0,
      true,
      false
    );
  };

  return {
    cantCancelMorningSessionSwal,
    cantCancelAfternoonSessionSwal,
    couldntFetchBookingClosingTimesSwal,
  };
};

export default useFireErrorSwals;
