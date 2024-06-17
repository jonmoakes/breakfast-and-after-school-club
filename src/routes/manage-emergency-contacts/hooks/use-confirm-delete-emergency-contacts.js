import useManageEmergencyContactDetailsThunk from "../../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-manage-emergency-contact-details-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import {
  confirmDeleteEmergencyContactsMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteEmergencyContacts = () => {
  const { manageEmergencyContactDetailsThunk } =
    useManageEmergencyContactDetailsThunk();
  const { confirmSwal } = useConfirmSwal();

  const confirmDeleteEmergencyContacts = () => {
    const confirmResult = () => {
      const emergencyContactDetails = "";
      manageEmergencyContactDetailsThunk(emergencyContactDetails);
    };

    confirmSwal(confirmDeleteEmergencyContactsMessage, "", imSureMessage, () =>
      confirmResult()
    );
  };

  return { confirmDeleteEmergencyContacts };
};

export default useConfirmDeleteEmergencyContacts;
