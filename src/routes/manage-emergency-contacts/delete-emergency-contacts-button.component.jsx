import useConfirmDeleteEmergencyContacts from "./hooks/use-confirm-delete-emergency-contacts";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const DeleteEmergencyContactsButton = ({
  retrievedEmergencyContactDetails,
}) => {
  const { confirmDeleteEmergencyContacts } =
    useConfirmDeleteEmergencyContacts();

  return (
    <>
      {retrievedEmergencyContactDetails !== "" ? (
        <ParentDiv>
          <Text>
            want to delete your emergency contacts? tap the button below.
          </Text>
          <YellowGreenButton
            type="button"
            onClick={confirmDeleteEmergencyContacts}
          >
            delete details
          </YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default DeleteEmergencyContactsButton;
