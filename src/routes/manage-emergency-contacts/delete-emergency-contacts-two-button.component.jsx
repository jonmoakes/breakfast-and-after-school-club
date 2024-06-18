import useConfirmDeleteEmergencyContacts from "./hooks/use-confirm-delete-emergency-contacts";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const DeleteEmergencyContactsTwoButton = ({
  retrievedEmergencyContactDetailsTwo,
}) => {
  const { confirmDeleteEmergencyContactsTwo } =
    useConfirmDeleteEmergencyContacts();

  return (
    <>
      {retrievedEmergencyContactDetailsTwo ? (
        <ParentDiv>
          <Text>
            want to delete your second emergency contact? tap the button below.
          </Text>
          <YellowGreenButton
            type="button"
            onClick={confirmDeleteEmergencyContactsTwo}
          >
            delete contact 2
          </YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default DeleteEmergencyContactsTwoButton;
