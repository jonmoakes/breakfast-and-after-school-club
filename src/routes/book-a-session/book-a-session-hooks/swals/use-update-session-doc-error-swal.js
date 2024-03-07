import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";

import {
  lastMinuteNoSessionsMessage,
  updateSessionDocErrorMessage,
} from "../../../../strings/errors/errors-strings";
import { checkBackRegularlyMessage } from "../../../../strings/infos/infos-strings";
import { bookSessionRoute } from "../../../../strings/routes/routes-strings";

const useUpdateSessionDocErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { updateSessionDoc } = useSelector(selectBookSessionSelectors);
  const updateSessionError = updateSessionDoc.error;

  const updateSessionDocErrorSwal = () => {
    if (updateSessionError === lastMinuteNoSessionsMessage) {
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
