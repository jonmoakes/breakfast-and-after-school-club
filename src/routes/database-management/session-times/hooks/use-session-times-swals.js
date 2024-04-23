import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  chooseAnotherTimeMessage,
  sameTimeErrorMessage,
  updatingSessionTimeFormattingErrorMessage,
  updatingSessionTimeInfoMessage,
} from "../../../../strings/errors/errors-strings";

const useSessionTimesSwals = () => {
  const { fireSwal } = useFireSwal();

  const showTimeFormattingErrorSwal = () => {
    fireSwal(
      "error",
      updatingSessionTimeFormattingErrorMessage,
      updatingSessionTimeInfoMessage,
      0,
      true,
      false
    );
  };

  const showTimesAreTheSameSwal = () => {
    fireSwal(
      "error",
      sameTimeErrorMessage,
      chooseAnotherTimeMessage,
      0,
      true,
      false
    );
  };

  return {
    showTimesAreTheSameSwal,
    showTimeFormattingErrorSwal,
  };
};

export default useSessionTimesSwals;
