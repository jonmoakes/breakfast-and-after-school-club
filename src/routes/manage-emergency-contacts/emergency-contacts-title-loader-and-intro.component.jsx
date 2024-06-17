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
      <Text>
        {retrievedEmergencyContactDetails === ""
          ? "here, you can add details of someone who we can reach in an emergency, should we not be able to get hold of yourselves."
          : "you can edit the details of your emergency contacts here."}
      </Text>

      {retrievedEmergencyContactDetails === "" ? (
        <Text>
          please enter a name, a relationship to the child and their contact
          details.
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
          bottom of the page and tap the 'delete details' button.
        </Text>
      ) : null}
    </ParentDiv>
  </>
);

export default EmergencyContactsTitleLoaderAndIntro;
