import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

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
  customerPortalRoute,
} from "../../../strings/routes/routes-strings";

const useNavigateToRoute = () => {
  const { id } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmAppOwnerViewAllBookings } = useConfirmSwal();

  const appOwnerButtons = [
    {
      id: 1,
      text: "customer bookings",
      onClick: () => hamburgerHandlerNavigate(bookedSessionsOwnerRoute),
    },
    {
      id: 2,
      text: "view all bookings",
      onClick: () => confirmAppOwnerViewAllBookings(),
    },
    {
      id: 3,
      text: "view all children",
      onClick: () => hamburgerHandlerNavigate(allChildrenRoute),
    },
    {
      id: 4,
      text: "view all Users",
      onClick: () => hamburgerHandlerNavigate(allUsersRoute),
    },
    {
      id: 5,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },

    id === import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID && {
      id: 6,
      text: "upload dates",
      onClick: () => hamburgerHandlerNavigate(uploadDatesRoute),
    },
    id !== import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID && {
      id: 7,
      text: "database management",
      onClick: () => hamburgerHandlerNavigate(databaseManagementRoute),
    },
    {
      id: 8,
      text: "install app info",
      onClick: () => hamburgerHandlerNavigate(pwaInfoRoute),
    },
    {
      id: 9,
      text: "contact",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },

    {
      id: 10,
      text: " customer portal",
      onClick: () => hamburgerHandlerNavigate(customerPortalRoute),
    },
  ].filter(Boolean); // Remove falsy values (null, undefined) from the array

  const notAppOwnerButtons = [
    {
      id: 11,
      text: "view your bookings",
      onClick: () => hamburgerHandlerNavigate(bookedSessionsUserRoute),
    },
    {
      id: 12,
      text: "book a session",
      onClick: () => hamburgerHandlerNavigate(bookSessionRoute),
    },
    {
      id: 13,
      text: "add funds",
      onClick: () => hamburgerHandlerNavigate(addFundsRoute),
    },
    {
      id: 14,
      text: "child info",
      onClick: () => hamburgerHandlerNavigate(childInfoRoute),
    },
    {
      id: 15,
      text: " update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
    {
      id: 16,
      text: " update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 17,
      text: " close account",
      onClick: () => hamburgerHandlerNavigate(closeAccountRoute),
    },
    {
      id: 18,
      text: " contact us",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },
    {
      id: 19,
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
