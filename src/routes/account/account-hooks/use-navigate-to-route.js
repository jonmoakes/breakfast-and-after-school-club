import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  addFundsRoute,
  bookSessionRoute,
  childInfoRoute,
  closeAccountRoute,
  bookedSessionsOwnerRoute,
  updateEmailRoute,
  updatePasswordRoute,
  bookedSessionsUserRoute,
  allChildrenRoute,
  allUsersRoute,
  uploadDatesRoute,
  databaseManagementRoute,
  contactRoute,
  pwaInfoRoute,
} from "../../../strings/routes/routes-strings";

const useNavigateToRoute = () => {
  const { id } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const appOwnerButtons = [
    {
      id: 1,
      text: "view bookings",
      onClick: () => hamburgerHandlerNavigate(bookedSessionsOwnerRoute),
    },
    {
      id: 2,
      text: "view all children",
      onClick: () => hamburgerHandlerNavigate(allChildrenRoute),
    },
    {
      id: 3,
      text: "view all Users",
      onClick: () => hamburgerHandlerNavigate(allUsersRoute),
    },
    {
      id: 4,
      text: " update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 5,
      text: " contact",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },

    id === import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID && {
      id: 6,
      text: " upload dates",
      onClick: () => hamburgerHandlerNavigate(uploadDatesRoute),
    },
    id !== import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID && {
      id: 7,
      text: " database management",
      onClick: () => hamburgerHandlerNavigate(databaseManagementRoute),
    },
  ].filter(Boolean); // Remove falsy values (null, undefined) from the array

  const notAppOwnerButtons = [
    {
      id: 8,
      text: "view your bookings",
      onClick: () => hamburgerHandlerNavigate(bookedSessionsUserRoute),
    },
    {
      id: 9,
      text: "book a session",
      onClick: () => hamburgerHandlerNavigate(bookSessionRoute),
    },
    {
      id: 10,
      text: "add funds",
      onClick: () => hamburgerHandlerNavigate(addFundsRoute),
    },
    {
      id: 11,
      text: "child info",
      onClick: () => hamburgerHandlerNavigate(childInfoRoute),
    },
    {
      id: 12,
      text: " update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
    {
      id: 13,
      text: " update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 14,
      text: " close account",
      onClick: () => hamburgerHandlerNavigate(closeAccountRoute),
    },
    {
      id: 15,
      text: " contact us",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },
    {
      id: 16,
      text: " install app info",
      onClick: () => hamburgerHandlerNavigate(pwaInfoRoute),
    },
  ];

  return {
    appOwnerButtons,
    notAppOwnerButtons,
  };
};

export default useNavigateToRoute;
