import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { cookiesRoute } from "../../../strings/routes/routes-strings";

const CookiePolicyLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <YellowGreenButton onClick={() => hamburgerHandlerNavigate(cookiesRoute)}>
        view cookie policy
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default CookiePolicyLink;
