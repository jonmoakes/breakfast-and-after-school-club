import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { selectCurrentUser } from "../../store/user/user.selector";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { signedInRoutesWithoutDash } from "./routes";

import {
  areYouSureMessage,
  loseAllDataMessage,
  imSureMessage,
} from "../../strings/strings";

const NavNotAppOwner = () => {
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmForwardToNewRoute } = useConfirmSwal();

  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  return (
    <>
      {/*if NOT on  pay-now route */}
      {currentUser && !isRouteWithNavWarning() ? (
        <>
          {signedInRoutesWithoutDash.map((route) => {
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

      {/*if ON pay-now route */}
      {currentUser && isRouteWithNavWarning() ? (
        <>
          {signedInRoutesWithoutDash.map((route) => {
            return route !== location.pathname ? (
              <NavLink
                key={route}
                onClick={() =>
                  confirmForwardToNewRoute(
                    areYouSureMessage,
                    loseAllDataMessage,
                    imSureMessage,
                    route
                  )
                }
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

export default NavNotAppOwner;
