import { useNavigate } from "react-router-dom";

import {
  addFundsRoute,
  bookSessionRoute,
  closeAccountRoute,
  updateEmailRoute,
  updatePasswordRequestRoute,
} from "../../../strings/strings";

const useNavigateToRoute = () => {
  const navigate = useNavigate();

  const navigateToBookSession = () => {
    navigate(bookSessionRoute);
  };

  const navigateToAddFunds = () => {
    navigate(addFundsRoute);
  };

  const navigateToUpdateEmail = () => {
    navigate(updateEmailRoute);
  };

  const navigateToUpdatePassword = () => {
    navigate(updatePasswordRequestRoute);
  };

  const navigateToCloseAccount = () => {
    navigate(closeAccountRoute);
  };

  return {
    navigateToBookSession,
    navigateToAddFunds,
    navigateToUpdateEmail,
    navigateToUpdatePassword,
    navigateToCloseAccount,
  };
};

export default useNavigateToRoute;
