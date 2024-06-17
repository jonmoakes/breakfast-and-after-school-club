import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
import useUpdateRegistrationStatusThunk from "../../../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-update-registration-status-thunk";

import { confirmUpdateRegistrationSignInMessage } from "../../../../../strings/confirms/confirms-strings";

import { getNumberOfChildrenInBooking } from "../../../../../functions/get-number-of-children-in-booking";
import {
  isInMorningHours,
  isInAfteroonHours,
  isSameDate,
} from "../../sign-in-out-shared-logic";

const useConfirmUpdateRegistrationSignInStatusAndLogic = (row) => {
  const { updateRegistrationStatusThunk } = useUpdateRegistrationStatusThunk();
  const { confirmSwal } = useConfirmSwal();

  const hasSignedIn = row.original.signedIn;
  const documentId = row.original.$id;
  const sessionType = row.original.sessionType;
  const childrenInBooking = row.original.childrensName;
  const date = row.original.dateAsDateObjectForSorting;

  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

  const showMorningHasNotBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      !hasSignedIn
      ? true
      : false;
  };

  const showMorningHasBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      hasSignedIn
      ? true
      : false;
  };

  const showAfternoonHasNotBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      !hasSignedIn
      ? true
      : false;
  };

  const showAfternoonHasBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      hasSignedIn
      ? true
      : false;
  };

  const confirmResult = () => {
    const attributeToUpdate = "signedIn";
    const signInStatus = hasSignedIn ? false : true;
    updateRegistrationStatusThunk(attributeToUpdate, signInStatus, documentId);
  };

  const confirmUpdateRegistrationSignInStatus = () => {
    confirmSwal(
      confirmUpdateRegistrationSignInMessage(
        hasSignedIn,
        numberOfChildrenInBooking,
        childrenInBooking
      ),
      "",
      "confirm",
      () => confirmResult()
    );
  };

  return {
    confirmUpdateRegistrationSignInStatus,
    showMorningHasNotBeenSignedInButton,
    showMorningHasBeenSignedInButton,
    showAfternoonHasNotBeenSignedInButton,
    showAfternoonHasBeenSignedInButton,
  };
};

export default useConfirmUpdateRegistrationSignInStatusAndLogic;
