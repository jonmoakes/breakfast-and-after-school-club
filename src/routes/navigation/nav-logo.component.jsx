import { useLocation } from "react-router-dom";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import {
  isInMorningHours,
  isInAfteroonHours,
} from "../../components/tables/sign-in-out-registration/sign-in-out-shared-logic.js";

import Logo from "../../assets/logo-80x80.webp";
import { LogoContainer } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";

import {
  areYouSureMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import {
  loseAllDataMessage,
  loseRegistrationChanges,
} from "../../strings/infos/infos-strings";
import { bookedSessionsOwnerRoute } from "../../strings/routes/routes-strings";

const NavLogo = () => {
  const { currentUser, schoolLogoUrl } = useGetCurrentUserSelectors();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const location = useLocation();
  const path = location.pathname;

  const handleClick = () => {
    const route = "/";

    if (
      currentUser &&
      path === bookedSessionsOwnerRoute &&
      (isInMorningHours || isInAfteroonHours)
    ) {
      confirmForwardToNewRoute(
        areYouSureMessage,
        loseRegistrationChanges,
        imSureMessage,
        route
      );
    } else if (currentUser && isRouteWithNavWarning()) {
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
      <LogoImage
        onClick={handleClick}
        src={schoolLogoUrl && schoolLogoUrl !== "none" ? schoolLogoUrl : Logo}
        alt="logo"
      />
    </LogoContainer>
  );
};

export default NavLogo;
