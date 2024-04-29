import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import {
  dbManageErrorAddingBookingToDatabaseMessage,
  dbManageErrorUpdatingBalanceAfterCancellingBookingMessage,
  dbManageErrorUpdatingSessionSpacesAndBalanceAfterCancelledBookingMessage,
} from "../../../strings/errors/errors-strings";

import { databaseManagementUpdateDocumentRoute } from "../../../strings/routes/routes-strings";

const useSetErrorAndNavigateToUpdateDocumentButtons = () => {
  const { dispatchSetReceivedErrorFromEmail } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const setChoiceAndNavigate = (receivedError) => {
    dispatchSetReceivedErrorFromEmail(receivedError);
    hamburgerHandlerNavigate(databaseManagementUpdateDocumentRoute);
  };

  const heading = "the error id is:";
  const setErrorButtons = [
    {
      id: 1,
      heading,
      text: "1",
      onClick: () => {
        setChoiceAndNavigate(
          dbManageErrorUpdatingBalanceAfterCancellingBookingMessage
        );
      },
    },
    {
      id: 2,
      heading,
      text: "2",
      onClick: () => {
        setChoiceAndNavigate(dbManageErrorAddingBookingToDatabaseMessage);
      },
    },
    {
      id: 3,
      heading,
      text: "3",
      onClick: () => {
        setChoiceAndNavigate(
          dbManageErrorUpdatingSessionSpacesAndBalanceAfterCancelledBookingMessage
        );
      },
    },
  ];

  return {
    setErrorButtons,
  };
};

export default useSetErrorAndNavigateToUpdateDocumentButtons;
