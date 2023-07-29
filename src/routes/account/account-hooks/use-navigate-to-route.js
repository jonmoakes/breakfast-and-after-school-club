import { useNavigate } from "react-router-dom";

import {
  addFundsRoute,
  bookSessionRoute,
  closeAccountRoute,
  updateEmailRoute,
  updatePasswordRoute,
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
    navigate(updatePasswordRoute);
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
