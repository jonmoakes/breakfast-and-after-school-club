import { useState } from "react";
import { getNumberOfChildrenInBooking } from "../../../../functions/get-number-of-children-in-booking";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { confirmUpdateRegistrationStatusMessage } from "../../../../strings/confirms/confirms-strings";

const useConfirmUpdateRegistrationStatusAndLogic = (row) => {
  const [signedIn, setSignedIn] = useState(false);
  const { confirmSwal } = useConfirmSwal();

  const childrenInBooking = row.original.childrensName;
  const sessionType = row.original.sessionType;
  const date = row.original.dateAsDateObjectForSorting;
  const currentDate = new Date();
  const hours = currentDate.getHours();

  const showMorningRegister =
    hours >= 7 && hours <= 10 && sessionType.includes("morning") ? true : false;

  const showAfternoonRegister =
    hours >= 14 && hours <= 18 && sessionType.includes("afternoon")
      ? true
      : false;

  currentDate.setHours(0, 0, 0, 0);

  const isSameDate = date.getTime() === currentDate.getTime();

  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

  const isSameDateShowingARegisterButtonAndChildrenNotSignedIn = () => {
    return (isSameDate && showMorningRegister && !signedIn) ||
      (isSameDate && showAfternoonRegister && !signedIn)
      ? true
      : false;
  };

  const isSameDateShowingARegisterButtonAndChildrenAreSignedIn = () => {
    return (isSameDate && showMorningRegister && signedIn) ||
      (isSameDate && showAfternoonRegister && signedIn)
      ? true
      : false;
  };

  const isSameDayAndNotShowingARegisterButton = () => {
    return (isSameDate && !showMorningRegister) ||
      (isSameDate && !showAfternoonRegister)
      ? true
      : false;
  };

  const confirmResult = () => {
    setSignedIn(!signedIn);
  };

  const confirmUpdateRegistrationStatus = () => {
    confirmSwal(
      confirmUpdateRegistrationStatusMessage(
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
    confirmUpdateRegistrationStatus,
    showMorningRegister,
    showAfternoonRegister,
    isSameDate,
    signedIn,
    isSameDateShowingARegisterButtonAndChildrenNotSignedIn,
    isSameDateShowingARegisterButtonAndChildrenAreSignedIn,
    isSameDayAndNotShowingARegisterButton,
  };
};

export default useConfirmUpdateRegistrationStatusAndLogic;
