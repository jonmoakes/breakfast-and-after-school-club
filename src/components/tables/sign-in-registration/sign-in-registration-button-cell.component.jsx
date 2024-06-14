import useConfirmUpdateRegistrationStatusAndLogic from "./hooks/use-confirm-update-registration-status-and-logic";

import {
  IsSignedInButton,
  NotSignedInButton,
} from "../../../styles/buttons/buttons.styles";

const SignInRegistrationButtonCell = ({ row }) => {
  const {
    confirmUpdateRegistrationStatus,
    isSameDate,
    isSameDateShowingARegisterButtonAndChildrenNotSignedIn,
    isSameDateShowingARegisterButtonAndChildrenAreSignedIn,
    isSameDayAndNotShowingARegisterButton,
  } = useConfirmUpdateRegistrationStatusAndLogic(row);

  return (
    <>
      {!isSameDate && "N/A"}

      {isSameDateShowingARegisterButtonAndChildrenNotSignedIn() ? (
        <NotSignedInButton
          type="button"
          onClick={confirmUpdateRegistrationStatus}
        >
          &#10006;
        </NotSignedInButton>
      ) : isSameDateShowingARegisterButtonAndChildrenAreSignedIn() ? (
        <IsSignedInButton
          type="button"
          onClick={confirmUpdateRegistrationStatus}
        >
          &#10004;
        </IsSignedInButton>
      ) : isSameDayAndNotShowingARegisterButton() ? (
        "N/A"
      ) : null}
    </>
  );
};

export default SignInRegistrationButtonCell;
