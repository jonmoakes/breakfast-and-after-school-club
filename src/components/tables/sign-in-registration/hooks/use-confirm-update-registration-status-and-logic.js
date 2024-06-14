import { getNumberOfChildrenInBooking } from "../../../../functions/get-number-of-children-in-booking";
import useUpdateChildRegistrationStatusThunk from "../../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-update-child-registration-status-thunk";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { confirmUpdateRegistrationStatusMessage } from "../../../../strings/confirms/confirms-strings";

const useConfirmUpdateRegistrationStatusAndLogic = (row) => {
  const { updateChildRegistrationStatusThunk, isLoading } =
    useUpdateChildRegistrationStatusThunk();
  const { confirmSwal } = useConfirmSwal();

  const attributeToUpdate = "signedIn";
  const signedIn = row.original.signedIn;
  const childrenSignedInStatus = !signedIn ? true : false;
  const childrenInBooking = row.original.childrensName;
  const documentId = row.original.$id;
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const sessionType = row.original.sessionType;

  const showMorningRegister =
    hours >= 7 && hours <= 10 && sessionType.includes("morning") ? true : false;

  const showAfternoonRegister =
    hours >= 14 && hours <= 18 && sessionType.includes("afternoon")
      ? true
      : false;

  currentDate.setHours(0, 0, 0, 0);

  const date = row.original.dateAsDateObjectForSorting;
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
    updateChildRegistrationStatusThunk(
      attributeToUpdate,
      childrenSignedInStatus,
      documentId
    );
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
    isLoading,
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
