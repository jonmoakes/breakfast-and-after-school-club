import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

import { contactRoute } from "../../strings/routes/routes-strings";

const LinkToContact = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <Text>want to find out more and see a full demo?</Text>
      <YellowGreenButton onClick={() => hamburgerHandlerNavigate(contactRoute)}>
        contact us!
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default LinkToContact;
