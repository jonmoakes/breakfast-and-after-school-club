import { useSelector } from "react-redux";

import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import Logo from "../../assets/logo.png";
import { LogoContainer } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";

import {
  areYouSureMessage,
  imSureMessage,
  loseAllDataMessage,
} from "../../strings/strings";

const NavLogo = () => {
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { currentUser } = useSelector(selectCurrentUserSelectors);

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
