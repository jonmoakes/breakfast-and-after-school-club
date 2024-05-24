import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import {
  contactRoute,
  pricingRoute,
} from "../../strings/routes/routes-strings";

const AboutPageLinks = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  return (
    <>
      <ParentDiv>
        <Text>if you have any more questions, or would like a full demo,</Text>
        <Text>
          please <StyledLink to={contactRoute}>contact us!</StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <YellowGreenButton
          onClick={() => hamburgerHandlerNavigate(pricingRoute)}
        >
          view pricing
        </YellowGreenButton>
      </ParentDiv>
    </>
  );
};

export default AboutPageLinks;
