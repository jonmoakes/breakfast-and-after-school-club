import useEmergencyContactDetailsActions from "../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-emergency-contact-details-actions";
import useConfirmUploadEmergencyContacts from "./hooks/use-confirm-upload-emergency-contacts";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledTextArea } from "../../styles/form/form.styles";

const EmergencyContactsForm = ({
  retrievedEmergencyContactDetails,
  emergencyContactDetails,
}) => {
  const { confirmUploadEmergencyContactDetails } =
    useConfirmUploadEmergencyContacts();
  const { handleManageEmergencyContactDetailsChange } =
    useEmergencyContactDetailsActions();

  return (
    <ParentDiv>
      <Form className="emergency-contacts">
        <Label>emergency contact details:</Label>
        <StyledTextArea
          type="text"
          name="emergencyContactDetails"
          onChange={handleManageEmergencyContactDetailsChange}
          defaultValue={
            retrievedEmergencyContactDetails
              ? retrievedEmergencyContactDetails
              : emergencyContactDetails
          }
          placeholder={
            "please enter a contact name, a relationship to the child and a phone number. You can add as many as you wish."
          }
        />

        {emergencyContactDetails ? (
          <YellowGreenButton
            type="button"
            onClick={() =>
              confirmUploadEmergencyContactDetails(
                emergencyContactDetails,
                retrievedEmergencyContactDetails
              )
            }
          >
            {retrievedEmergencyContactDetails === "" ? "upload " : "update "}{" "}
            details
          </YellowGreenButton>
        ) : null}
      </Form>
    </ParentDiv>
  );
};

export default EmergencyContactsForm;
