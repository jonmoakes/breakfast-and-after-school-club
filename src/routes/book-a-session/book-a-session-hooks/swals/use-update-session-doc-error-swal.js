import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectUpdateSessionDoc } from "../../../../store/book-session/book-session.slice";

import {
  afternoonSessionSpacesInvalidDocError,
  bookSessionRoute,
  checkBackRegularlyMessage,
  lastMinuteNoSessionsMessage,
  morningSessionSpacesInvalidDocError,
  updateSessionDocErrorMessage,
} from "../../../../strings/strings";

const useUpdateSessionDocErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const updateSessionDoc = useSelector(selectUpdateSessionDoc);
  const updateSessionError = updateSessionDoc.error;

  const updateSessionDocErrorSwal = () => {
    if (
      updateSessionError === lastMinuteNoSessionsMessage ||
      updateSessionError === morningSessionSpacesInvalidDocError ||
      updateSessionError === afternoonSessionSpacesInvalidDocError
    ) {
      fireSwal(
        "error",
        lastMinuteNoSessionsMessage,
        checkBackRegularlyMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(bookSessionRoute);
        }
      });
    } else {
      fireSwal(
        "error",
        updateSessionDocErrorMessage,
        updateSessionError,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(bookSessionRoute);
        }
      });
    }
  };

  return { updateSessionDocErrorSwal };
};

export default useUpdateSessionDocErrorSwal;
