import Balancer from "react-wrap-balancer";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const EmergencyContactsTitleLoaderAndIntro = ({
  emergencyContactDetailsIsLoading,
  retrievedEmergencyContactDetails,
}) => (
  <>
    {emergencyContactDetailsIsLoading ? <Loader /> : null}

    <ParentDiv>
      <BlackTitle>
        <Balancer>emergency contacts</Balancer>
      </BlackTitle>
    </ParentDiv>

    <ParentDiv>
      {retrievedEmergencyContactDetails === "" ? (
        <Text>
          here, you can add details of up to two people who we can reach in an
          emergency, should we not be able to get hold of yourselves."
        </Text>
      ) : (
        <Text>you can edit the details of your emergency contacts here.</Text>
      )}

      {retrievedEmergencyContactDetails === "" ? (
        <Text>
          please enter a name, a relationship to the child and a phone number.
        </Text>
      ) : null}

      <Text>
        after you have entered in the details, tap the '
        {retrievedEmergencyContactDetails === "" ? "upload" : "update "}{" "}
        details' button when it appears.
      </Text>

      {retrievedEmergencyContactDetails !== "" ? (
        <Text>
          if you want to delete the emergency contact details, scroll to the
          bottom of the form of the contact you want to delete and tap the
          appropriate button.
        </Text>
      ) : null}

      <Text>
        please note, that you can only edit or delete one entry at a time.
      </Text>
    </ParentDiv>
  </>
);

export default EmergencyContactsTitleLoaderAndIntro;
