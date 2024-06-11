import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { ownerSignedInRoutes } from "./routes";
import { allBookingsRoute } from "../../strings/routes/routes-strings";

const NavAppOwner = () => {
  const { currentUser, id, appOwnerId } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmViewAllBookings } = useConfirmSwal();

  const location = useLocation();

  return (
    <>
      {currentUser && id === appOwnerId ? (
        <>
          {ownerSignedInRoutes.map((route) => {
            return route !== location.pathname ? (
              <NavLink
                key={route}
                onClick={() =>
                  route === allBookingsRoute
                    ? confirmViewAllBookings()
                    : hamburgerHandlerNavigate(route)
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

export default NavAppOwner;
