import useCardInputResultActions from "../../../hooks/get-actions-and-thunks/use-card-input-result-actions";

import { formNotCompleteWarning } from "../../../strings/errors/errors-strings";

const useHandleCardInputChange = () => {
  const { dispatchSetCardInputResult } = useCardInputResultActions();

  const handleCardInputChange = (e) => {
    if (!e.empty && e.error === undefined && e.complete === false) {
      dispatchSetCardInputResult({
        error: "",
        warning: formNotCompleteWarning,
        showPrePayButton: false,
      });
    } else if (e.error !== undefined && e.complete === false) {
      dispatchSetCardInputResult({
        error: e.error.message,
        warning: "",
        showPrePayButton: false,
      });
    } else if (!e.empty && e.error === undefined && e.complete === true) {
      dispatchSetCardInputResult({
        error: "",
        warning: "",
        showPrePayButton: true,
      });
    }
  };

  return { handleCardInputChange };
};

export default useHandleCardInputChange;
