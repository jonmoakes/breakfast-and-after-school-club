import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

import {
  databaseManagementViewBookingClosingTimesRoute,
  databaseManagementViewSessionPricesRoute,
  databaseManagementViewSessionTimesRoute,
  databaseManagementUpdateUserBalanceRoute,
  databaseManagementAddBookingRoute,
  databaseManagementUpdateSessionSpacesRoute,
  databaseManagementDeleteUserRoute,
} from "../../../strings/routes/routes-strings";

const useNavigateToDbManagementButtons = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { dispatchErrorId } = useDatabaseManagementActions();

  const handleNavWithErrorId = (errorId, route) => {
    dispatchErrorId(errorId);
    hamburgerHandlerNavigate(route);
  };

  let heading = "view / edit";
  const dbManagementButtons = [
    {
      id: 1,
      heading: "add a booking for someone who doesn't use the app",
      text: "add a booking",
      onClick: () =>
        handleNavWithErrorId("", databaseManagementAddBookingRoute),
    },
    {
      id: 2,
      heading,
      text: "booking closing times",
      onClick: () =>
        hamburgerHandlerNavigate(
          databaseManagementViewBookingClosingTimesRoute
        ),
    },
    {
      id: 3,
      heading,
      text: "session times",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementViewSessionTimesRoute),
    },
    {
      id: 4,
      heading,
      text: "session prices",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementViewSessionPricesRoute),
    },
    {
      id: 5,
      heading: "update a users balance",
      text: "email error id '1'",
      onClick: () =>
        handleNavWithErrorId("1", databaseManagementUpdateUserBalanceRoute),
    },
    {
      id: 6,
      heading: "add a booking after you received an error email",
      text: "email error id '2'",
      onClick: () =>
        handleNavWithErrorId("2", databaseManagementAddBookingRoute),
    },
    {
      id: 7,
      heading: "update user balance & session spaces",
      text: "email error id '3'",
      onClick: () =>
        handleNavWithErrorId("3", databaseManagementUpdateUserBalanceRoute),
    },
    {
      id: 8,
      heading: "update session spaces",
      text: "email error id '4'",
      onClick: () =>
        handleNavWithErrorId("4", databaseManagementUpdateSessionSpacesRoute),
    },
    {
      id: 9,
      heading: "delete user document",
      text: "delete user",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementDeleteUserRoute),
    },
  ];

  return {
    dbManagementButtons,
  };
};

export default useNavigateToDbManagementButtons;
