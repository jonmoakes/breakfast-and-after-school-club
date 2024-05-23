import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { refundsPolicyRoute } from "../../../strings/routes/routes-strings";

const RefundPolicyLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <YellowGreenButton
        onClick={() => hamburgerHandlerNavigate(refundsPolicyRoute)}
      >
        view refund policy
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default RefundPolicyLink;
