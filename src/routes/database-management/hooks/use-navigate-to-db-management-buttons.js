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
  databaseManagementCreateChildRoute,
  databaseManagementDeleteChildRoute,
  databaseManagementUpdateLatestBookingsAndChildrensParentEmailRoute,
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
      heading: "add a booking",
      text: "add a booking",
      onClick: () =>
        handleNavWithErrorId("", databaseManagementAddBookingRoute),
    },
    {
      id: 2,
      heading: "cancel a booking",
      text: "cancel a booking",
      onClick: () =>
        handleNavWithErrorId("", databaseManagementCancelBookingRoute),
    },
    {
      id: 3,
      heading: "update a users balance",
      text: "update balance",
      onClick: () =>
        handleNavWithErrorId("", databaseManagementUpdateUserBalanceRoute),
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
      heading: "create a user",
      text: "create  user",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementCreateUserRoute),
    },
    {
      id: 8,
      heading: "delete a user",
      text: "delete user",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementDeleteUserRoute),
    },
    {
      id: 9,
      heading: "create a child",
      text: "create child",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementCreateChildRoute),
    },
    {
      id: 10,
      heading: "delete a child",
      text: "delete child",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementDeleteChildRoute),
    },
    {
      id: 11,
      heading: "Update Data With Users New Email",
      text: "Apply Update",
      onClick: () =>
        hamburgerHandlerNavigate(
          databaseManagementUpdateLatestBookingsAndChildrensParentEmailRoute
        ),
    },
  ];

  const dbManagementForErrorReceivedButtons = [
    {
      id: 12,
      heading: "update a users balance",
      text: "email error id '1'",
      onClick: () =>
        handleNavWithErrorId("1", databaseManagementUpdateUserBalanceRoute),
    },
    {
      id: 13,
      heading: "add a booking after you received an error email",
      text: "email error id '2'",
      onClick: () =>
        handleNavWithErrorId("2", databaseManagementAddBookingRoute),
    },
    {
      id: 14,
      heading: "update user balance & session spaces",
      text: "email error id '3'",
      onClick: () =>
        handleNavWithErrorId("3", databaseManagementUpdateUserBalanceRoute),
    },
    {
      id: 15,
      heading: "update session spaces",
      text: "email error id '4'",
      onClick: () =>
        handleNavWithErrorId("4", databaseManagementUpdateSessionSpacesRoute),
    },
  ];

  return {
    dbManagementButtons,
    dbManagementForErrorReceivedButtons,
  };
};

export default useNavigateToDbManagementButtons;
