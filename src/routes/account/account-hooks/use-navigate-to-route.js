import { useNavigate } from "react-router-dom";

import {
  addFundsRoute,
  bookSessionRoute,
  childInfoRoute,
  closeAccountRoute,
  updateEmailRoute,
  updatePasswordRequestRoute,
  userBookingsRoute,
} from "../../../strings/strings";

const useNavigateToRoute = () => {
  const navigate = useNavigate();

  const emailProviderButtons = [
    {
      id: 1,
      text: "view your bookings",
      onClick: () => navigate(userBookingsRoute),
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
      onClick: () => navigate(updatePasswordRequestRoute),
    },
    {
      id: 7,
      text: " close account",
      onClick: () => navigate(closeAccountRoute),
    },
  ];

  const authProviderButtons = [
    {
      id: 1,
      text: "view your bookings",
      onClick: () => navigate(userBookingsRoute),
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
      text: " close account",
      onClick: () => navigate(closeAccountRoute),
    },
  ];

  return {
    emailProviderButtons,
    authProviderButtons,
  };
};

export default useNavigateToRoute;
