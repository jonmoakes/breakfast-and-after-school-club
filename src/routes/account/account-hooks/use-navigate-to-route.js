import { useNavigate } from "react-router-dom";

import {
  addFundsRoute,
  bookSessionRoute,
  childInfoRoute,
  closeAccountRoute,
  updateEmailRoute,
  updatePasswordRequestRoute,
} from "../../../strings/strings";

const useNavigateToRoute = () => {
  const navigate = useNavigate();

  const emailProviderButtons = [
    {
      id: 1,
      text: "book a session",
      onClick: () => navigate(bookSessionRoute),
    },
    {
      id: 2,
      text: "add funds",
      onClick: () => navigate(addFundsRoute),
    },
    {
      id: 3,
      text: "view child info",
      onClick: () => navigate(childInfoRoute),
    },
    {
      id: 4,
      text: " update email",
      onClick: () => navigate(updateEmailRoute),
    },
    {
      id: 5,
      text: " update password",
      onClick: () => navigate(updatePasswordRequestRoute),
    },
    {
      id: 6,
      text: " close account",
      onClick: () => navigate(closeAccountRoute),
    },
  ];

  const authProviderButtons = [
    {
      id: 1,
      text: "book a session",
      onClick: () => navigate(bookSessionRoute),
    },
    {
      id: 2,
      text: "add funds",
      onClick: () => navigate(addFundsRoute),
    },
    {
      id: 3,
      text: "view child info",
      onClick: () => navigate(childInfoRoute),
    },
    {
      id: 4,
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
