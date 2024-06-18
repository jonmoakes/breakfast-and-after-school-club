import useManageEmergencyContactDetailsThunk from "../../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-manage-emergency-contact-details-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  confirmDeleteFirstEmergencyContactsMessage,
  confirmDeleteSecondEmergencyContactsMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteEmergencyContacts = () => {
  const { manageEmergencyContactDetailsThunk } =
    useManageEmergencyContactDetailsThunk();
  const { confirmSwal } = useConfirmSwal();

  const confirmDeleteEmergencyContacts = () => {
    const confirmResult = () => {
      const attributeToUpdate = "emergencyContactDetails";
      const details = "";
      manageEmergencyContactDetailsThunk(attributeToUpdate, details);
    };

    confirmSwal(
      confirmDeleteFirstEmergencyContactsMessage,
      "",
      imSureMessage,
      () => confirmResult()
    );
  };

  const confirmDeleteEmergencyContactsTwo = () => {
    const confirmResult = () => {
      const attributeToUpdate = "emergencyContactDetailsTwo";
      const details = "";
      manageEmergencyContactDetailsThunk(attributeToUpdate, details);
    };

    confirmSwal(
      confirmDeleteSecondEmergencyContactsMessage,
      "",
      imSureMessage,
      () => confirmResult()
    );
  };

  return { confirmDeleteEmergencyContacts, confirmDeleteEmergencyContactsTwo };
};

export default useConfirmDeleteEmergencyContacts;
