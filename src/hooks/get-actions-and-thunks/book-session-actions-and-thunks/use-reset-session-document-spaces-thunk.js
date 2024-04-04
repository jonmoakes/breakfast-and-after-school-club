import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import useSendResetSessionSpacesErrorEmailThunk from "../send-email-actions-and-thunks/use-send-reset-session-spaces-error-email-thunk";
import useFireSwal from "../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";

import { resetSessionDocAsync } from "../../../store/book-session/book-session.thunks";

import { bookSessionRoute } from "../../../strings/routes/routes-strings";
import {
  errorInstructions,
  resetSessionErrorMessage,
} from "../../../strings/errors/errors-strings";

const useResetSessionDocumentSpacesThunk = () => {
  const { databaseId, termDatesCollectionId: collectionId } =
    useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();
  const { sendResetSessionSpacesErrorEmailThunk } =
    useSendResetSessionSpacesErrorEmailThunk();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const resetSessionDocumentSpacesThunk = (
    date,
    sessionType,
    numberOfSpacesToAdd
  ) => {
    dispatch(
      resetSessionDocAsync({
        date,
        databaseId,
        collectionId,
        sessionType,
        numberOfSpacesToAdd,
      })
    ).then((action) => {
      if (resetSessionDocAsync.fulfilled.match(action)) {
        hamburgerHandlerNavigate(bookSessionRoute);
      } else {
        fireSwal(
          "error",
          resetSessionErrorMessage,
          errorInstructions,
          0,
          true,
          false
        ).then((isConfirmed) => {
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

  return { resetSessionDocumentSpacesThunk };
};

export default useResetSessionDocumentSpacesThunk;
