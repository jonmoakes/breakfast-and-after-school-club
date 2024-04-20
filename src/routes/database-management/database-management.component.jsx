import Balancer from "react-wrap-balancer";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { databaseManagementViewBookingClosingTimesRoute } from "../../strings/routes/routes-strings";

const DatabaseManagement = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const viewBookingClosingTimes = () => {
    hamburgerHandlerNavigate(databaseManagementViewBookingClosingTimesRoute);
  };
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
          please contact jonathan if you have any queries at all before
          proceeding.
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Balancer>
          <BlueH2>view / edit booking closing times</BlueH2>
        </Balancer>
        <YellowGreenButton onClick={viewBookingClosingTimes}>
          view / edit
        </YellowGreenButton>
      </ParentDiv>
    </Container>
  );
};

export default DatabaseManagement;
