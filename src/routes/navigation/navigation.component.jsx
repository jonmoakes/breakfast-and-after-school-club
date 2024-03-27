import { useLocation } from "react-router-dom";

import useGetHamburgerMenuSelectors from "../../hooks/get-selectors/use-get-hamburger-menu-selectors";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import Loader from "../../components/loader/loader.component";
import NavLogo from "./nav-logo.component";
import NavHamburger from "./nav-hamburger.component";
import NavNoUser from "./nav-no-user.component";
import NavAppOwner from "./nav-app-owner.component";
import NavNotAppOwner from "./nav-not-app-owner.component";
import NavSignOut from "./nav-sign-out.component";

import { Nav, Menu } from "../../styles/div/div.styles";

import {
  cancelBookingRoute,
  chosenEntryChildDetailsRoute,
  deleteChildInfoRoute,
  editChildInfoRoute,
} from "../../strings/routes/routes-strings";

const Navigation = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();
  const { currentUserIsLoading } = useGetCurrentUserSelectors();

  const location = useLocation();
  const path = location.pathname;

  const isRouteWithHeader = () => {
    return path !== editChildInfoRoute &&
      path !== deleteChildInfoRoute &&
      path !== chosenEntryChildDetailsRoute &&
      path !== cancelBookingRoute
      ? true
      : false;
  };

  return (
    <>
      {currentUserIsLoading ? <Loader /> : null}

      {isRouteWithHeader() ? (
        <Nav>
          <NavLogo />
          <>
            <NavHamburger />

            <Menu {...{ showHamburgerMenu }}>
              <NavNoUser />
              <NavAppOwner />
              <NavNotAppOwner />
              <NavSignOut />
            </Menu>
          </>
        </Nav>
      ) : null}
    </>
  );
};

export default Navigation;
