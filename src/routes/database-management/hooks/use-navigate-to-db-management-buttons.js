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
  databaseManagementCancelBookingRoute,
  databaseManagementCreateUserRoute,
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
      heading: "create a user",
      text: "create a user",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementCreateUserRoute),
    },
    {
      id: 2,
      heading: "add a booking",
      text: "add a booking",
      onClick: () =>
        handleNavWithErrorId("", databaseManagementAddBookingRoute),
    },
    {
      id: 3,
      heading: "cancel a booking",
      text: "cancel a booking",
      onClick: () =>
        handleNavWithErrorId("", databaseManagementCancelBookingRoute),
    },
    {
      id: 4,
      heading,
      text: "booking closing times",
      onClick: () =>
        hamburgerHandlerNavigate(
          databaseManagementViewBookingClosingTimesRoute
        ),
    },
    {
      id: 5,
      heading,
      text: "session times",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementViewSessionTimesRoute),
    },
    {
      id: 6,
      heading,
      text: "session prices",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementViewSessionPricesRoute),
    },
    {
      id: 7,
      heading: "update a users balance",
      text: "email error id '1'",
      onClick: () =>
        handleNavWithErrorId("1", databaseManagementUpdateUserBalanceRoute),
    },
    {
      id: 8,
      heading: "add a booking after you received an error email",
      text: "email error id '2'",
      onClick: () =>
        handleNavWithErrorId("2", databaseManagementAddBookingRoute),
    },
    {
      id: 9,
      heading: "update user balance & session spaces",
      text: "email error id '3'",
      onClick: () =>
        handleNavWithErrorId("3", databaseManagementUpdateUserBalanceRoute),
    },
    {
      id: 10,
      heading: "update session spaces",
      text: "email error id '4'",
      onClick: () =>
        handleNavWithErrorId("4", databaseManagementUpdateSessionSpacesRoute),
    },
    {
      id: 11,
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
