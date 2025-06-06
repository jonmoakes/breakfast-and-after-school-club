import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../use-fire-swal";
import { updateSessionSpacesDocAsync } from "../../../store/database-management/database-management-thunks";
import useSendResetSessionSpacesErrorEmailThunk from "../send-email-actions-and-thunks/use-send-reset-session-spaces-error-email-thunk";

import { bookSessionRoute } from "../../../strings/routes/routes-strings";
import {
  errorInstructions,
  resetSessionErrorMessage,
} from "../../../strings/errors/errors-strings";

const useResetSessionSpacesThunk = () => {
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();
  const { sendResetSessionSpacesErrorEmailThunk } =
    useSendResetSessionSpacesErrorEmailThunk();
  const { fireSwal } = useFireSwal();

  const resetSessionSpacesThunk = (
    numberOfChildrenInBooking,
    date,
    sessionType
  ) => {
    const route = bookSessionRoute;
    const operation = "add";
    dispatch(
      updateSessionSpacesDocAsync({
        numberOfChildrenInBooking,
        date,
        databaseId,
        termDatesCollectionId,
        route,
        sessionType,
        operation,
      })
    ).then((action) => {
      if (updateSessionSpacesDocAsync.fulfilled.match(action)) {
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

  return { resetSessionSpacesThunk };
};

export default useResetSessionSpacesThunk;
