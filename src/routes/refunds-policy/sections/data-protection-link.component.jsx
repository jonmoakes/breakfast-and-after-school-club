import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { dataProtectionPolicyRoute } from "../../../strings/routes/routes-strings";
import { Text } from "../../../styles/p/p.styles";

const DataProtectionLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <Text>view our policy on</Text>
      <YellowGreenButton
        onClick={() => hamburgerHandlerNavigate(dataProtectionPolicyRoute)}
      >
        data protection
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default DataProtectionLink;
