import { useState } from "react";

import useConfirmSwal from "../../../../../hooks/use-confirm-swal";

import { confirmUpdateRegistrationSignInMessage } from "../../../../../strings/confirms/confirms-strings";

import { getNumberOfChildrenInBooking } from "../../../../../functions/get-number-of-children-in-booking";
import {
  isInMorningHours,
  isInAfteroonHours,
  isSameDate,
} from "../../sign-in-out-shared-logic";

const useConfirmUpdateRegistrationSignInStatusAndLogic = (row) => {
  const [signedIn, setSignedIn] = useState(false);
  const { confirmSwal } = useConfirmSwal();

  const sessionType = row.original.sessionType;
  const childrenInBooking = row.original.childrensName;
  const date = row.original.dateAsDateObjectForSorting;

  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

  const showMorningHasNotBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      !signedIn
      ? true
      : false;
  };

  const showMorningHasBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      signedIn
      ? true
      : false;
  };

  const showAfternoonHasNotBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      !signedIn
      ? true
      : false;
  };

  const showAfternoonHasBeenSignedInButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      signedIn
      ? true
      : false;
  };

  const confirmResult = () => {
    setSignedIn(!signedIn);
  };

  const confirmUpdateRegistrationSignInStatus = () => {
    confirmSwal(
      confirmUpdateRegistrationSignInMessage(
        signedIn,
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
