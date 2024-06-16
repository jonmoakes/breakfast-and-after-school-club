import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { ownerSignedInRoutes } from "./routes";
import {
  bookedSessionsOwnerAllBookingsRoute,
  bookedSessionsOwnerRoute,
} from "../../strings/routes/routes-strings";
import {
  isInAfteroonHours,
  isInMorningHours,
} from "../../components/tables/sign-in-out-registration/sign-in-out-shared-logic";
import {
  areYouSureMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import { loseRegistrationChanges } from "../../strings/infos/infos-strings";

const NavAppOwner = () => {
  const { currentUser, id, appOwnerId } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmAppOwnerViewAllBookings, confirmForwardToNewRoute } =
    useConfirmSwal();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {currentUser && id === appOwnerId ? (
        <>
          {ownerSignedInRoutes.map((route) => {
            return route !== location.pathname ? (
              <NavLink
                key={route}
                onClick={() =>
                  route === bookedSessionsOwnerAllBookingsRoute
                    ? confirmAppOwnerViewAllBookings()
                    : path === bookedSessionsOwnerRoute &&
                      (isInMorningHours || isInAfteroonHours)
                    ? confirmForwardToNewRoute(
                        areYouSureMessage,
                        loseRegistrationChanges,
                        imSureMessage,
                        route
                      )
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
