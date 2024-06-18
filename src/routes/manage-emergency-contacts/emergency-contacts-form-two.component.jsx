import useEmergencyContactDetailsActions from "../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-emergency-contact-details-actions";
import useConfirmUploadEmergencyContacts from "./hooks/use-confirm-upload-emergency-contacts";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledTextArea } from "../../styles/form/form.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

import { emergencyContactPlaceholder } from "../../strings/placeholders/placeholders-strings";

const EmergencyContactsFormTwo = ({
  retrievedEmergencyContactDetailsTwo,
  emergencyContactDetailsTwo,
}) => {
  const { confirmUploadEmergencyContactDetailsTwo } =
    useConfirmUploadEmergencyContacts();
  const { handleManageEmergencyContactDetailsTwoChange } =
    useEmergencyContactDetailsActions();

  return (
    <ParentDiv>
      <BlueH2>emergency contact 2</BlueH2>
      <Form className="emergency-contacts">
        <Label>second emergency contact details:</Label>
        <StyledTextArea
          type="text"
          name="emergencyContactDetailsTwo"
          onChange={handleManageEmergencyContactDetailsTwoChange}
          defaultValue={
            retrievedEmergencyContactDetailsTwo
              ? retrievedEmergencyContactDetailsTwo
              : emergencyContactDetailsTwo
          }
          placeholder={emergencyContactPlaceholder}
        />

        {emergencyContactDetailsTwo ? (
          <YellowGreenButton
            type="button"
            onClick={() =>
              confirmUploadEmergencyContactDetailsTwo(
                emergencyContactDetailsTwo,
                retrievedEmergencyContactDetailsTwo
              )
            }
          >
            {retrievedEmergencyContactDetailsTwo === "" ? "upload " : "update "}{" "}
            details
          </YellowGreenButton>
        ) : null}
      </Form>
    </ParentDiv>
  );
};

export default EmergencyContactsFormTwo;
