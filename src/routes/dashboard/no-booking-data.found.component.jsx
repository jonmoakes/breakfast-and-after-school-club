import { contactRoute } from "../../strings/strings";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

const NoBookingDataFound = ({ data }) => (
  <>
    {!data.length ? (
      <ParentDiv>
        <BlueH2>no booking data found</BlueH2>
        <Text>
          if you think that their should be data here please tap the button
          below to reload the page, or{" "}
          <StyledLink to={contactRoute}>contact us</StyledLink> if the problem
          persists.
        </Text>
        <YellowGreenButton onClick={() => window.location.reload()}>
          reload
        </YellowGreenButton>
      </ParentDiv>
    ) : null}
  </>
);

export default NoBookingDataFound;
