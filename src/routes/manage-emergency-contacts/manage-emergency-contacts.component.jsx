import useGetEmergencyContactDetailsSelectors from "../../hooks/get-selectors/use-get-emergency-contact-details-selectors";
import useManageEmergencyContactDetailsResult from "./hooks/use-manage-emergency-contact-details-result";
import useGetEmergencyContactsDetailsThunkUseEffect from "../../hooks/get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-get-emergency-contact-details-thunk-use-effect";

import EmergencyContactsTitleLoaderAndIntro from "./emergency-contacts-title-loader-and-intro.component";
import EmergencyContactsForm from "./emergency-contacts-form.component";
import DeleteEmergencyContactsButton from "./delete-emergency-contacts-button.component";
import EmergencyContactsFormTwo from "./emergency-contacts-form-two.component";
import DeleteEmergencyContactsTwoButton from "./delete-emergency-contacts-two-button.component";

import { Container } from "../../styles/container/container.styles";

import { ParentDiv } from "../../styles/div/div.styles";

const ManageEmergencyContacts = () => {
  useGetEmergencyContactsDetailsThunkUseEffect();
  useManageEmergencyContactDetailsResult();
  const {
    retrievedEmergencyContactDetails,
    retrievedEmergencyContactDetailsTwo,
    emergencyContactDetailsIsLoading,
  } = useGetEmergencyContactDetailsSelectors();
  let { emergencyContactDetails, emergencyContactDetailsTwo } =
    useGetEmergencyContactDetailsSelectors();

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

      <ParentDiv className="black"></ParentDiv>

      <>
        <EmergencyContactsFormTwo
          {...{
            retrievedEmergencyContactDetailsTwo,
            emergencyContactDetailsTwo,
          }}
        />
        <DeleteEmergencyContactsTwoButton
          {...{ retrievedEmergencyContactDetailsTwo }}
        />
      </>
    </Container>
  );
};

export default ManageEmergencyContacts;
