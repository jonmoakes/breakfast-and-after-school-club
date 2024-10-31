import { useState } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useConfirmPasswordForDbAccessThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-confirm-password-for-db-access-thunk";

const usePasswordCheckLogic = () => {
  const { passwordForDbAccessResult, databaseManagementIsLoading } =
    useGetDatabaseManagementSelectors();

  const { confirmPasswordForDbAccessThunk } =
    useConfirmPasswordForDbAccessThunk();

  const [password, setPassword] = useState("");

  const userHasSuccessfullyEnteredPassword = localStorage.getItem(
    "userHasSuccessfullyEnteredPasswordToAccessDbManagement"
  );

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordCheck = () => {
    confirmPasswordForDbAccessThunk(password);
  };

  return {
    databaseManagementIsLoading,
    passwordForDbAccessResult,
    userHasSuccessfullyEnteredPassword,
    handlePasswordChange,
    handlePasswordCheck,
    password,
  };
};

export default usePasswordCheckLogic;
