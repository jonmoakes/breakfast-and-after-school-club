import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../store/user/user.selector";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { ownerSignedInRoutes } from "./routes";

const NavAppOwner = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { appOwnerId } = envVariables;
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
