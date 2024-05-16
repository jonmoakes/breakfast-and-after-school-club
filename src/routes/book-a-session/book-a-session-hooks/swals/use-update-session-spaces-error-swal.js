import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import {
  lastMinuteNoSessionsMessage,
  updateSessionDocErrorMessage,
} from "../../../../strings/errors/errors-strings";
import { checkBackRegularlyMessage } from "../../../../strings/infos/infos-strings";
import { bookSessionRoute } from "../../../../strings/routes/routes-strings";

const useUpdateSessionSpacesErrorSwal = () => {
  const { updateSessionSpacesError } = useGetDatabaseManagementSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const updateSessionSpacesErrorSwal = () => {
    if (updateSessionSpacesError === lastMinuteNoSessionsMessage) {
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
        updateSessionSpacesError,
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

  return { updateSessionSpacesErrorSwal };
};

export default useUpdateSessionSpacesErrorSwal;
