import useGetErrorOnRegUpdateUseEffect from "./hooks/use-get-error-on-reg-update-use-effect";
import useConfirmUpdateRegistrationStatusAndLogic from "./hooks/use-confirm-update-registration-status-and-logic";

import ChildNotSignedInButton from "./buttons/child-not-signed-in-button.component";
import ChildIsSignedInButton from "./buttons/child-is-signed-in-button.component";

const SignInRegistrationButtonCell = ({ row }) => {
  useGetErrorOnRegUpdateUseEffect();
  const {
    confirmUpdateRegistrationStatus,
    isLoading,
    isSameDate,
    isSameDateShowingARegisterButtonAndChildrenNotSignedIn,
    isSameDateShowingARegisterButtonAndChildrenAreSignedIn,
    isSameDayAndNotShowingARegisterButton,
  } = useConfirmUpdateRegistrationStatusAndLogic(row);

  return (
    <>
      {!isSameDate && "N/A"}

      {isSameDateShowingARegisterButtonAndChildrenNotSignedIn() ? (
        <ChildNotSignedInButton
          {...{ isLoading, confirmUpdateRegistrationStatus }}
        />
      ) : isSameDateShowingARegisterButtonAndChildrenAreSignedIn() ? (
        <ChildIsSignedInButton
          {...{ isLoading, confirmUpdateRegistrationStatus }}
        />
      ) : isSameDayAndNotShowingARegisterButton() ? (
        "N/A"
      ) : null}
    </>
  );
};

export default SignInRegistrationButtonCell;
