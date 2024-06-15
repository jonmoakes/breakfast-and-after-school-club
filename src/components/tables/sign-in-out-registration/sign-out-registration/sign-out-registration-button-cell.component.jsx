import useConfirmUpdateRegistrationSignOutStatusAndLogic from "./hooks/use-confirm-update-registration-sign-out-status-and-logic";

import {
  RegistrationXButton,
  RegistrationTickButton,
} from "../../../../styles/buttons/buttons.styles";

const SignOutRegistrationButtonCell = ({ row }) => {
  const {
    confirmUpdateRegistrationSignOutStatus,
    showMorningHasNotBeenSignedOutButton,
    showMorningHasBeenSignedOutButton,
    showAfternoonHasNotBeenSignedOutButton,
    showAfternoonHasBeenSignedOutButton,
  } = useConfirmUpdateRegistrationSignOutStatusAndLogic(row);

  return (
    <>
      {showMorningHasNotBeenSignedOutButton() ||
      showAfternoonHasNotBeenSignedOutButton() ? (
        <RegistrationXButton
          type="button"
          onClick={confirmUpdateRegistrationSignOutStatus}
        >
          &#10006;
        </RegistrationXButton>
      ) : showMorningHasBeenSignedOutButton() ||
        showAfternoonHasBeenSignedOutButton() ? (
        <RegistrationTickButton
          type="button"
          onClick={confirmUpdateRegistrationSignOutStatus}
        >
          &#10004;
        </RegistrationTickButton>
      ) : (
        "N/A"
      )}
    </>
  );
};

export default SignOutRegistrationButtonCell;
