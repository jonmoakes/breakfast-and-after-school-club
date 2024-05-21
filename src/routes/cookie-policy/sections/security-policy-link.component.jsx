import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { securityPolicyRoute } from "../../../strings/routes/routes-strings";

const SecurityPolicyLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <YellowGreenButton
        onClick={() => hamburgerHandlerNavigate(securityPolicyRoute)}
      >
        view security policy
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default SecurityPolicyLink;
