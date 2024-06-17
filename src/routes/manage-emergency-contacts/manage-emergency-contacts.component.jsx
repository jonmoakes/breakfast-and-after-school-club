import useGetEmergencyContactDetailsSelectors from "../../hooks/get-selectors/use-get-emergency-contact-details-selectors";
import useManageEmergencyContactDetailsResult from "./hooks/use-manage-emergency-contact-details-result";
import useGetEmergencyContactsDetailsThunkUseEffect from "../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-get-emergency-contact-details-thunk-use-effect";

import EmergencyContactsTitleLoaderAndIntro from "./emergency-contacts-title-loader-and-intro.component";
import EmergencyContactsForm from "./emergency-contacts-form.component";
import DeleteEmergencyContactsButton from "./delete-emergency-contacts-button.component";

import { Container } from "../../styles/container/container.styles";

const ManageEmergencyContacts = () => {
  useGetEmergencyContactsDetailsThunkUseEffect();
  useManageEmergencyContactDetailsResult();
  const { retrievedEmergencyContactDetails, emergencyContactDetailsIsLoading } =
    useGetEmergencyContactDetailsSelectors();
  let { emergencyContactDetails } = useGetEmergencyContactDetailsSelectors();

  return (
    <Container>
      <EmergencyContactsTitleLoaderAndIntro
        {...{
          emergencyContactDetailsIsLoading,
          retrievedEmergencyContactDetails,
        }}
      />

      <EmergencyContactsForm
        {...{ retrievedEmergencyContactDetails, emergencyContactDetails }}
      />

      <DeleteEmergencyContactsButton
        {...{ retrievedEmergencyContactDetails }}
      />
    </Container>
  );
};

export default ManageEmergencyContacts;
