import { useNavigate } from "react-router-dom";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

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
} from "../../../strings/routes/routes-strings";

const useNavigateToRoute = () => {
  const { id } = useGetCurrentUserSelectors();
  const navigate = useNavigate();

  const appOwnerButtons = [
    {
      id: 1,
      text: "view bookings",
      onClick: () => navigate(bookedSessionsOwnerRoute),
    },
    {
      id: 2,
      text: "view all children",
      onClick: () => navigate(allChildrenRoute),
    },
    {
      id: 3,
      text: "view all Users",
      onClick: () => navigate(allUsersRoute),
    },
    {
      id: 4,
      text: " update password",
      onClick: () => navigate(updatePasswordRoute),
    },
    id === import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID && {
      id: 5,
      text: " upload dates",
      onClick: () => navigate(uploadDatesRoute),
    },
  ].filter(Boolean); // Remove falsy values (null, undefined) from the array

  const notAppOwnerButtons = [
    {
      id: 1,
      text: "view your bookings",
      onClick: () => navigate(bookedSessionsUserRoute),
    },
    {
      id: 2,
      text: "book a session",
      onClick: () => navigate(bookSessionRoute),
    },
    {
      id: 3,
      text: "add funds",
      onClick: () => navigate(addFundsRoute),
    },
    {
      id: 4,
      text: "child info",
      onClick: () => navigate(childInfoRoute),
    },
    {
      id: 5,
      text: " update email",
      onClick: () => navigate(updateEmailRoute),
    },
    {
      id: 6,
      text: " update password",
      onClick: () => navigate(updatePasswordRoute),
    },
    {
      id: 7,
      text: " close account",
      onClick: () => navigate(closeAccountRoute),
    },
  ];

  return {
    appOwnerButtons,
    notAppOwnerButtons,
  };
};

export default useNavigateToRoute;
