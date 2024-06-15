import { useState } from "react";

import useConfirmSwal from "../../../../../hooks/use-confirm-swal";

import { confirmUpdateRegistrationSignOutMessage } from "../../../../../strings/confirms/confirms-strings";

import { getNumberOfChildrenInBooking } from "../../../../../functions/get-number-of-children-in-booking";
import {
  isInMorningHours,
  isInAfteroonHours,
  isSameDate,
} from "../../sign-in-out-shared-logic";

const useConfirmUpdateRegistrationSignOutStatusAndLogic = (row) => {
  const [signedOut, setSignedOut] = useState(false);
  const { confirmSwal } = useConfirmSwal();

  const sessionType = row.original.sessionType;
  const childrenInBooking = row.original.childrensName;
  const date = row.original.dateAsDateObjectForSorting;

  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

  const showMorningHasNotBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      !signedOut
      ? true
      : false;
  };

  const showMorningHasBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("morning") &&
      isInMorningHours &&
      signedOut
      ? true
      : false;
  };

  const showAfternoonHasNotBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      !signedOut
      ? true
      : false;
  };

  const showAfternoonHasBeenSignedOutButton = () => {
    return isSameDate(date) &&
      sessionType.includes("afternoon") &&
      isInAfteroonHours &&
      signedOut
      ? true
      : false;
  };

  const confirmResult = () => {
    setSignedOut(!signedOut);
  };

  const confirmUpdateRegistrationSignOutStatus = () => {
    confirmSwal(
      confirmUpdateRegistrationSignOutMessage(
        signedOut,
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
