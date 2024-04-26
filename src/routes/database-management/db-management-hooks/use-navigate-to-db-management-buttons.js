import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  databaseManagementViewBookingClosingTimesRoute,
  databaseManagementViewSessionTimesRoute,
  databaseManagementViewSessionPricesRoute,
  databaseManagementChooseErrorRoute,
} from "../../../strings/routes/routes-strings";

const useNavigateToDbManagementButtons = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const heading = "view / edit";
  const dbManagementButtons = [
    {
      id: 1,
      heading,
      text: "booking closing times",
      onClick: () =>
        hamburgerHandlerNavigate(
          databaseManagementViewBookingClosingTimesRoute
        ),
    },
    {
      id: 2,
      heading,
      text: "session times",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementViewSessionTimesRoute),
    },
    {
      id: 3,
      heading,
      text: "session prices",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementViewSessionPricesRoute),
    },
    {
      id: 4,
      heading: "update a document after an error",
      text: "update other docs",
      onClick: () =>
        hamburgerHandlerNavigate(databaseManagementChooseErrorRoute),
    },
  ];

  return {
    dbManagementButtons,
  };
};

export default useNavigateToDbManagementButtons;
