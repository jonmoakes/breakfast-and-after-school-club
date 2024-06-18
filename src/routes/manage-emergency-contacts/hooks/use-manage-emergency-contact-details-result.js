import { useEffect } from "react";

import useGetEmergencyContactDetailsSelectors from "../../../hooks/get-selectors/use-get-emergency-contact-details-selectors";
import useEmergencyContactDetailsActions from "../../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-emergency-contact-details-actions";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../strings/routes/routes-strings";
import { errorUploadingEmergencyContactsMessage } from "../../../strings/errors/errors-strings";
import { successMessage } from "../../../strings/successes/successes-strings";

const useManageEmergencyContactDetailsResult = () => {
  const {
    manageEmergencyContactDetailsResult,
    manageEmergencyContactDetailsError,
    retrievedEmergencyContactDetails,
  } = useGetEmergencyContactDetailsSelectors();
  const {
    dispatchResetEmergencyContactDetailsResult,
    dispatchResetEmergencyContactDetailsError,
  } = useEmergencyContactDetailsActions();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (
      !manageEmergencyContactDetailsResult &&
      !manageEmergencyContactDetailsError
    )
      return;

    if (manageEmergencyContactDetailsResult === "fulfilled") {
      fireSwal("success", successMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(accountRoute);
          }
        }
      );
    } else if (manageEmergencyContactDetailsResult === "rejected") {
      fireSwal(
        "error",
        errorUploadingEmergencyContactsMessage(
          manageEmergencyContactDetailsError
        ),
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetEmergencyContactDetailsResult();
          dispatchResetEmergencyContactDetailsError();
        }
      });
    }
  }, [
    manageEmergencyContactDetailsError,
    manageEmergencyContactDetailsResult,
    fireSwal,
    hamburgerHandlerNavigate,
    dispatchResetEmergencyContactDetailsResult,
    dispatchResetEmergencyContactDetailsError,
    retrievedEmergencyContactDetails,
  ]);
};

export default useManageEmergencyContactDetailsResult;
