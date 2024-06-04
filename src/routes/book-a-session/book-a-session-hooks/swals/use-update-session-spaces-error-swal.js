import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  lastMinuteNoSessionsMessage,
  updateSessionDocErrorMessage,
} from "../../../../strings/errors/errors-strings";
import { checkBackRegularlyMessage } from "../../../../strings/infos/infos-strings";

const useUpdateSessionSpacesErrorSwal = () => {
  const { updateSessionSpacesError } = useGetDatabaseManagementSelectors();
  const { fireSwal } = useFireSwal();

  const updateSessionSpacesErrorSwal = () => {
    if (
      updateSessionSpacesError === lastMinuteNoSessionsMessage ||
      updateSessionSpacesError.includes("Value must be a valid range between")
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
          window.location.reload();
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
          window.location.reload();
        }
      });
    }
  };

  return { updateSessionSpacesErrorSwal };
};

export default useUpdateSessionSpacesErrorSwal;
