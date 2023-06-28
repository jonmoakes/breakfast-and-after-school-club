import { useLocation } from "react-router-dom";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { signedOutRoutes } from "./routes";

const NavNoUser = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const location = useLocation();

  return (
    <>
      {signedOutRoutes.map((route) => {
        return route !== location.pathname ? (
          <NavLink key={route} onClick={() => hamburgerHandlerNavigate(route)}>
            <BorderLink>
              {route.replaceAll("-", " ").replace("/", " ")}
            </BorderLink>
          </NavLink>
        ) : null;
      })}
    </>
  );
};

export default NavNoUser;
