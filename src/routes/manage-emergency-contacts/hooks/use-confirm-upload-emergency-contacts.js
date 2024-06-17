import useManageEmergencyContactDetailsThunk from "../../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-manage-emergency-contact-details-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import {
  confirmUpdateEmergencyContactsMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import { emergencyContactsDetailsAreTheSameMessage } from "../../../strings/errors/errors-strings";

const useConfirmUploadEmergencyContacts = () => {
  const { manageEmergencyContactDetailsThunk } =
    useManageEmergencyContactDetailsThunk();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const confirmUploadEmergencyContactDetails = (
    emergencyContactDetails,
    retrievedEmergencyContactDetails
  ) => {
    const confirmResult = () => {
      manageEmergencyContactDetailsThunk(emergencyContactDetails);
    };
    if (retrievedEmergencyContactDetails === emergencyContactDetails) {
      fireSwal(
        "error",
        emergencyContactsDetailsAreTheSameMessage,
        "",
        0,
        true,
        false
      );
    } else {
      confirmSwal(
        confirmUpdateEmergencyContactsMessage,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUploadEmergencyContactDetails };
};

export default useConfirmUploadEmergencyContacts;
