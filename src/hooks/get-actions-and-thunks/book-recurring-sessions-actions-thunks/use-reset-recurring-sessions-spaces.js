import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../use-fire-swal";
import { updateRecurringSessionSpacesDocAsync } from "../../../store/book-recurring-sessions/book-recurring-sessions-thunks";
import useSendResetSessionSpacesErrorEmailThunk from "../send-email-actions-and-thunks/use-send-reset-session-spaces-error-email-thunk";

import { bookRecurringSessionsRoute } from "../../../strings/routes/routes-strings";
import {
  errorInstructions,
  resetSessionErrorMessage,
} from "../../../strings/errors/errors-strings";

const useResetRecurringSessionSpacesThunk = () => {
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();
  const { sendResetSessionSpacesErrorEmailThunk } =
    useSendResetSessionSpacesErrorEmailThunk();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  const resetRecurringSessionSpacesThunk = (
    bookingsToAdd,
    sessionChoice,
    numberOfChildrenInBooking
  ) => {
    const route = bookRecurringSessionsRoute;
    const operation = "add";
    dispatch(
      updateRecurringSessionSpacesDocAsync({
        bookingsToAdd,
        databaseId,
        termDatesCollectionId,
        route,
        sessionChoice,
        numberOfChildrenInBooking,
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
          const date = bookingsToAdd.map((booking) => booking.date).join(", ");
          const sessionType = sessionChoice;
          const numberOfSpacesToAdd = numberOfChildrenInBooking;
          if (isConfirmed) {
            sendResetSessionSpacesErrorEmailThunk(
              date,
              sessionType,
              numberOfSpacesToAdd
            );
          }
        });
      }
    });
  };

  return { resetRecurringSessionSpacesThunk };
};

export default useResetRecurringSessionSpacesThunk;
