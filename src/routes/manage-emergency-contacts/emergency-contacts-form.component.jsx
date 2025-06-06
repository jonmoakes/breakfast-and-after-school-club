import useEmergencyContactDetailsActions from "../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-emergency-contact-details-actions";
import useConfirmUploadEmergencyContacts from "./hooks/use-confirm-upload-emergency-contacts";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledTextArea } from "../../styles/form/form.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

import { emergencyContactPlaceholder } from "../../strings/placeholders/placeholders-strings";

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
      <BlueH2>emergency contact 1</BlueH2>
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
          placeholder={emergencyContactPlaceholder}
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
