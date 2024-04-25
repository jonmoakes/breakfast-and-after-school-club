import { useNavigate } from "react-router-dom";

import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";

import { databaseManagementUpdateDocumentRoute } from "../../../strings/routes/routes-strings";
import { dbManageErrorUpdatingBalanceAfterCancellingBookingMessage } from "../../../strings/errors/errors-strings";

const ErrorIdInEmailReceived = () => {
  const { dispatchSetReceivedErrorFromEmail } = useDatabaseManagementActions();
  const navigate = useNavigate();

  const setChoiceAndNavigate = (receivedError) => {
    dispatchSetReceivedErrorFromEmail(receivedError);
    navigate(databaseManagementUpdateDocumentRoute);
  };

  return (
    <>
      <ParentDiv>
        <Text>
          please tap on the button that has the same error id as the one that
          you received in the email.
        </Text>
        <BlackHr />

        <Text>error id:</Text>
        <YellowGreenButton
          onClick={() =>
            setChoiceAndNavigate(
              dbManageErrorUpdatingBalanceAfterCancellingBookingMessage
            )
          }
        >
          1
        </YellowGreenButton>
        <BlackHr />
      </ParentDiv>
    </>
  );
};

export default ErrorIdInEmailReceived;
