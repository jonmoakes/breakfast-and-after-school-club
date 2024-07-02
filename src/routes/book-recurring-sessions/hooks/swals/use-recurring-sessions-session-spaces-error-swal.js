import useBookRecurringSessionsActions from "../../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-book-recurring-sessions-actions";
import useGetBookRecurringSessionsSelectors from "../../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import { updateSessionDocErrorMessage } from "../../../../strings/errors/errors-strings";

const useRecurringSessonsSessionSpacesErrorSwal = () => {
  const { updateSessionSpacesError } = useGetBookRecurringSessionsSelectors();
  const {
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useBookRecurringSessionsActions();

  const { fireSwal } = useFireSwal();
  const recurringSessonsSessionSpacesErrorSwal = () => {
    fireSwal(
      "error",
      updateSessionDocErrorMessage,
      updateSessionSpacesError,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetUpdateSessionSpacesResult();
        dispatchResetUpdateSessionSpacesError();
      }
    });
  };

  return { recurringSessonsSessionSpacesErrorSwal };
};

export default useRecurringSessonsSessionSpacesErrorSwal;
