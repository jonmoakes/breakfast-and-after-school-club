import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
import useUpdateRegistrationStatusThunk from "../../../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-update-registration-status-thunk";

import { confirmUpdateRegistrationSignOutMessage } from "../../../../../strings/confirms/confirms-strings";

import { getNumberOfChildrenInBooking } from "../../../../../functions/get-number-of-children-in-booking";
import {
  isInMorningHours,
  isInAfteroonHours,
  isSameDate,
} from "../../sign-in-out-shared-logic";

const useConfirmUpdateRegistrationSignOutStatusAndLogic = (row) => {
  const { updateRegistrationStatusThunk } = useUpdateRegistrationStatusThunk();
  const { confirmSwal } = useConfirmSwal();

  const hasSignedOut = row.original.signedOut;
  const documentId = row.original.$id;
  const sessionType = row.original.sessionType;
  const childrenInBooking = row.original.childrensName;
  const date = row.original.dateAsDateObjectForSorting;

  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

  const showMorningHasNotBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      !hasSignedOut
      ? true
      : false;
  };

  const showMorningHasBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      hasSignedOut
      ? true
      : false;
  };

  const showAfternoonHasNotBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      !hasSignedOut
      ? true
      : false;
  };

  const showAfternoonHasBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      hasSignedOut
      ? true
      : false;
  };

  const confirmResult = () => {
    const attributeToUpdate = "signedOut";
    const signInStatus = hasSignedOut ? false : true;
    updateRegistrationStatusThunk(attributeToUpdate, signInStatus, documentId);
  };

  const confirmUpdateRegistrationSignOutStatus = () => {
    confirmSwal(
      confirmUpdateRegistrationSignOutMessage(
        hasSignedOut,
        numberOfChildrenInBooking,
        childrenInBooking
      ),
      "",
      "confirm",
      () => confirmResult()
    );
  };

  return {
    confirmUpdateRegistrationSignOutStatus,
    showMorningHasNotBeenSignedOutButton,
    showMorningHasBeenSignedOutButton,
    showAfternoonHasNotBeenSignedOutButton,
    showAfternoonHasBeenSignedOutButton,
  };
};

export default useConfirmUpdateRegistrationSignOutStatusAndLogic;
