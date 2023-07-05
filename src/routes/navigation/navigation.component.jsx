import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";

import NavLogo from "./nav-logo.component";
import NavHamburger from "./nav-hamburger.component";
import NavNoUser from "./nav-no-user.component";
// import NavAppOwner from "./nav-app-owner.component";
// import NavNotAppOwner from "./nav-not-app-owner.component";
import NavSignOut from "./nav-sign-out.component";

import { Nav, Menu } from "../../styles/div/div.styles";

const Navigation = () => {
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  return (
    <>
      <Nav>
        <NavLogo />
        <NavHamburger />

        <Menu {...{ showHamburgerMenu }}>
          <NavNoUser />
          {/* <NavAppOwner />
          <NavNotAppOwner />*/}
          <NavSignOut />
        </Menu>
      </Nav>

      <Outlet />
    </>
  );
};

export default Navigation;
