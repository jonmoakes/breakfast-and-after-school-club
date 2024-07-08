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
  manageEmergencyContactsRoute,
  incomeRoute,
  bookingTermsRoute,
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
      text: "income",
      onClick: () => hamburgerHandlerNavigate(incomeRoute),
    },
    {
      id: 6,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },

    id === import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID && {
      id: 7,
      text: "upload dates",
      onClick: () => hamburgerHandlerNavigate(uploadDatesRoute),
    },
    id !== import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID && {
      id: 8,
      text: "database management",
      onClick: () => hamburgerHandlerNavigate(databaseManagementRoute),
    },
    {
      id: 9,
      text: "install app info",
      onClick: () => hamburgerHandlerNavigate(pwaInfoRoute),
    },
    {
      id: 10,
      text: "contact",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },
    {
      id: 11,
      text: "customer portal",
      onClick: () => hamburgerHandlerNavigate(customerPortalRoute),
    },
  ].filter(Boolean); // Remove falsy values (null, undefined) from the array

  const notAppOwnerButtons = [
    {
      id: 12,
      text: "view your bookings",
      onClick: () => hamburgerHandlerNavigate(bookedSessionsUserRoute),
    },
    {
      id: 13,
      text: "book a session",
      onClick: () => hamburgerHandlerNavigate(bookSessionRoute),
    },
    {
      id: 14,
      text: "add funds",
      onClick: () => hamburgerHandlerNavigate(addFundsRoute),
    },
    {
      id: 15,
      text: "child info",
      onClick: () => hamburgerHandlerNavigate(childInfoRoute),
    },
    {
      id: 16,
      text: " update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
    {
      id: 17,
      text: " update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 18,
      text: "emergency contacts",
      onClick: () => hamburgerHandlerNavigate(manageEmergencyContactsRoute),
    },
    {
      id: 19,
      text: "booking T&Cs",
      onClick: () => hamburgerHandlerNavigate(bookingTermsRoute),
    },
    {
      id: 20,
      text: " close account",
      onClick: () => hamburgerHandlerNavigate(closeAccountRoute),
    },
    {
      id: 21,
      text: " contact us",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },
    {
      id: 22,
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
