import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  databaseManagementViewBookingClosingTimesRoute,
  databaseManagementViewSessionTimesRoute,
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
  ];

  return {
    dbManagementButtons,
  };
};

export default useNavigateToDbManagementButtons;
