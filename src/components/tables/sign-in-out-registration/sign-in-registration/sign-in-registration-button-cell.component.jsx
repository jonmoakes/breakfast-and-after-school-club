import useConfirmUpdateRegistrationSignInStatusAndLogic from "./hooks/use-confirm-update-registration-sign-in-status-and-logic";

import {
  RegistrationXButton,
  RegistrationTickButton,
} from "../../../../styles/buttons/buttons.styles";

const SignInRegistrationButtonCell = ({ row }) => {
  const {
    confirmUpdateRegistrationSignInStatus,
    showMorningHasNotBeenSignedInButton,
    showMorningHasBeenSignedInButton,
    showAfternoonHasNotBeenSignedInButton,
    showAfternoonHasBeenSignedInButton,
  } = useConfirmUpdateRegistrationSignInStatusAndLogic(row);

  return (
    <>
      {showMorningHasNotBeenSignedInButton() ||
      showAfternoonHasNotBeenSignedInButton() ? (
        <RegistrationXButton
          type="button"
          onClick={confirmUpdateRegistrationSignInStatus}
        >
          &#10006;
        </RegistrationXButton>
      ) : showMorningHasBeenSignedInButton() ||
        showAfternoonHasBeenSignedInButton() ? (
        <RegistrationTickButton
          type="button"
          onClick={confirmUpdateRegistrationSignInStatus}
        >
          &#10004;
        </RegistrationTickButton>
      ) : (
        "N/A"
      )}
    </>
  );
};

export default SignInRegistrationButtonCell;
