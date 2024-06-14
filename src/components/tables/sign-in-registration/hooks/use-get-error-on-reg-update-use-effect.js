import { useEffect } from "react";

import useGetBookedSessionsOwnerSelectors from "../../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useBookedSessionsOwnerActions from "../../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors/errors-strings";

const useGetErrorOnRegUpdateUseEffect = () => {
  const { registrationChangeError } = useGetBookedSessionsOwnerSelectors();
  const { dispatchResetRegistrationChangeError } =
    useBookedSessionsOwnerActions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!registrationChangeError) return;

    fireSwal(
      "error",
      "error updating registraion status",
      errorReceivedMessage(registrationChangeError),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetRegistrationChangeError();
      }
    });
  }, [dispatchResetRegistrationChangeError, registrationChangeError, fireSwal]);
};

export default useGetErrorOnRegUpdateUseEffect;
