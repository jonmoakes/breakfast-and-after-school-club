import { contactRoute } from "../../strings/routes/routes-strings";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

const NoSessionsBookedYet = () => (
  <ParentDiv>
    <BlueH2>no booking data found</BlueH2>
    <Text>
      if you think that there should be data here, please tap the button below
      to reload the page, or{" "}
      <StyledLink to={contactRoute}>contact us</StyledLink> if the problem
      persists.
    </Text>
    <YellowGreenButton onClick={() => window.location.reload()}>
      reload
    </YellowGreenButton>
  </ParentDiv>
);

export default NoSessionsBookedYet;
