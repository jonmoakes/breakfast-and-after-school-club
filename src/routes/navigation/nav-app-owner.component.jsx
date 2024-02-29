import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { ownerSignedInRoutes } from "./routes";

const NavAppOwner = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { appOwnerId } = currentUserEnvironmentVariables;
  const location = useLocation();

  return (
    <>
      {currentUser && currentUser.id === appOwnerId ? (
        <>
          {ownerSignedInRoutes.map((route) => {
            return route !== location.pathname ? (
              <NavLink
                key={route}
                onClick={() => hamburgerHandlerNavigate(route)}
              >
                <BorderLink>
                  {route.replaceAll("-", " ").replace("/", " ")}
                </BorderLink>
              </NavLink>
            ) : null;
          })}
        </>
      ) : null}
    </>
  );
};

export default NavAppOwner;
