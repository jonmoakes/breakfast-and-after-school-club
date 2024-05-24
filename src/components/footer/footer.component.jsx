import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackH2 } from "../../styles/h2/h2.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import {
  termsRoute,
  privacyPolicyRoute,
  cookiesRoute,
  securityPolicyRoute,
  refundsPolicyRoute,
  dataProtectionPolicyRoute,
} from "../../strings/routes/routes-strings";
import {
  areYouSureMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import { loseAllDataMessage } from "../../strings/infos/infos-strings";

const Footer = () => {
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const confirmChange = (route) => {
    if (isRouteWithNavWarning()) {
      confirmForwardToNewRoute(
        areYouSureMessage,
        loseAllDataMessage,
        imSureMessage,
        route
      );
    } else {
      hamburgerHandlerNavigate(route);
    }
  };

  return (
    <ParentDiv>
      <BlackH2>legal</BlackH2>
      <StyledUnorderedList>
        <BlackHr />

        <BlueListItem
          className="clickable"
          onClick={() => confirmChange(termsRoute)}
        >
          terms & conditions
        </BlueListItem>

        <BlackHr />

        <BlueListItem
          className="clickable"
          onClick={() => confirmChange(privacyPolicyRoute)}
        >
          privacy policy
        </BlueListItem>

        <BlackHr />

        <BlueListItem
          className="clickable"
          onClick={() => confirmChange(cookiesRoute)}
        >
          cookie policy
        </BlueListItem>

        <BlackHr />

        <BlueListItem
          className="clickable"
          onClick={() => confirmChange(securityPolicyRoute)}
        >
          security policy
        </BlueListItem>

        <BlackHr />

        <BlueListItem
          className="clickable"
          onClick={() => confirmChange(refundsPolicyRoute)}
        >
          refunds
        </BlueListItem>

        <BlackHr />

        <BlueListItem
          className="clickable"
          onClick={() => confirmChange(dataProtectionPolicyRoute)}
        >
          data protection
        </BlueListItem>

        <BlackHr />
      </StyledUnorderedList>
    </ParentDiv>
  );
};

export default Footer;
