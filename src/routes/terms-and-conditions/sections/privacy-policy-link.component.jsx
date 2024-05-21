import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { privacyPolicyRoute } from "../../../strings/routes/routes-strings";

const PrivacyPolicyLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <YellowGreenButton
        onClick={() => hamburgerHandlerNavigate(privacyPolicyRoute)}
      >
        view privacy policy
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default PrivacyPolicyLink;
