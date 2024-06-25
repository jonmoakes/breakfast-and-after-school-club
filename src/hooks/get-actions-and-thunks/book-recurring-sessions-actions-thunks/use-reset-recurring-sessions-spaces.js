import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../use-fire-swal";

import { bookRecurringSessionsRoute } from "../../../strings/routes/routes-strings";
import {
  errorInstructions,
  resetSessionErrorMessage,
} from "../../../strings/errors/errors-strings";
import { updateRecurringSessionSpacesDocAsync } from "../../../store/book-recurring-sessions/book-recurring-sessions-thunks";

const useResetRecurringSessionSpacesThunk = () => {
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  const resetRecurringSessionSpacesThunk = (
    numberOfChildrenInBooking,
    bookingData,
    sessionChoice
  ) => {
    const route = bookRecurringSessionsRoute;
    const operation = "add";
    dispatch(
      updateRecurringSessionSpacesDocAsync({
        numberOfChildrenInBooking,
        bookingData,
        databaseId,
        termDatesCollectionId,
        route,
        sessionChoice,
        operation,
      })
    ).then((action) => {
      if (updateRecurringSessionSpacesDocAsync.fulfilled.match(action)) {
        window.location.reload();
      } else {
        fireSwal(
          "error",
          resetSessionErrorMessage,
          errorInstructions,
          0,
          true,
          false
        ).then((isConfirmed) => {
          //   const numberOfSpacesToAdd = numberOfChildrenInBooking;
          if (isConfirmed) {
            // send error email here
            // sendResetSessionSpacesErrorEmailThunk(
            //   date,
            //   sessionType,
            //   numberOfSpacesToAdd
            // );
          }
        });
      }
    });
  };

  return { resetRecurringSessionSpacesThunk };
};

export default useResetRecurringSessionSpacesThunk;
