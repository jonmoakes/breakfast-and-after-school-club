import Balancer from "react-wrap-balancer";
import useNavigateToDbManagementButtons from "./hooks/use-navigate-to-db-management-buttons";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const DatabaseManagement = () => {
  const { dbManagementButtons } = useNavigateToDbManagementButtons();

  const setUserHasConfirmed = () => {
    localStorage.setItem("userHasConfirmed", "true");
    window.location.reload();
  };

  const userHasConfirmed = localStorage.getItem("userHasConfirmed");

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>database management</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>here, you can view and update data in your database.</Text>
        <Text>
          <RedSpan>
            please note, editing the database can break the app if not done
            correctly!
          </RedSpan>
        </Text>
        <Text>
          please note, any button including and under the heading of '
          <RedSpan>update a users balance</RedSpan>', should only be pressed if
          you have received an email telling you that there was an error when a
          user tried to perform an action in the app.
        </Text>
        <Text>
          if this is the case, you will have the error id in the email.
        </Text>
        <Text>
          tap on the button with the corresponding error id and this will take
          you to the appropriate page where you can manually fix the error.
        </Text>
        <Text>
          please contact jonathan if you have any queries at all before
          proceeding.
        </Text>
      </ParentDiv>

      {userHasConfirmed !== "true" ? (
        <ParentDiv>
          <Balancer>
            <Text>
              please tap the button below to confirm that you understand that
              making changes to the database can break the app if not done
              correctly.
            </Text>
            <Text>
              this choice will last until you sign out on this device.
            </Text>
            <Text>
              if you are signed in on any other device, the choice you made on
              that device will remain irrespective of whether you press 'i
              understand' on the device that you are currently using.
            </Text>
            <Text>when you sign back in, you will have to confirm again.</Text>
          </Balancer>
          <YellowGreenButton onClick={setUserHasConfirmed}>
            i understand
          </YellowGreenButton>
        </ParentDiv>
      ) : null}

      {userHasConfirmed === "true" ? (
        <RenderButtonsList {...{ buttons: dbManagementButtons }} />
      ) : null}
    </Container>
  );
};

export default DatabaseManagement;
