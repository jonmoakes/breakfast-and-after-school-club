import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import Logo from "../../assets/logo.webp";
import { LogoContainer } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";

import {
  areYouSureMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import { loseAllDataMessage } from "../../strings/infos/infos-strings";

const NavLogo = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const handleClick = () => {
    const route = "/";

    if (currentUser && isRouteWithNavWarning()) {
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
    <LogoContainer>
      <LogoImage onClick={handleClick} src={Logo} alt="logo" />
    </LogoContainer>
  );
};

export default NavLogo;
