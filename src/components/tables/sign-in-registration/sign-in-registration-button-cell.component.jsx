import useUpdateChildRegistrationStatusThunk from "../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-update-child-registration-status-thunk";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import Loader from "../../loader/loader.component";

import {
  IsSignedInButton,
  NotSignedInButton,
} from "../../../styles/buttons/buttons.styles";

import { getNumberOfChildrenInBooking } from "../../../functions/get-number-of-children-in-booking";
import { confirmUpdateRegistrationStatusMessage } from "../../../strings/confirms/confirms-strings";
import useGetErrorOnRegUpdateUseEffect from "./hooks/use-get-error-on-reg-update-use-effect";

const SignInRegistrationButtonCell = ({ row }) => {
  useGetErrorOnRegUpdateUseEffect();
  const { updateChildRegistrationStatusThunk, isLoading } =
    useUpdateChildRegistrationStatusThunk();

  const { confirmSwal } = useConfirmSwal();

  const currentDate = new Date();
  const hours = currentDate.getHours();
  const sessionType = row.original.sessionType;
  const childrenInBooking = row.original.childrensName;
  const signedIn = row.original.signedIn;

  const showMorningRegister =
    hours >= 7 && hours <= 10 && sessionType.includes("morning") ? true : false;

  const showAfternoonRegister =
    hours >= 15 && hours <= 18 && sessionType.includes("afternoon")
      ? true
      : false;

  currentDate.setHours(0, 0, 0, 0);

  const attributeToUpdate = "signedIn";
  const childrenSignedInStatus = !signedIn ? true : false;
  const date = row.original.dateAsDateObjectForSorting;
  const documentId = row.original.$id;
  const isSameDate = date.getTime() === currentDate.getTime();
  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

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

  return (
    <>
      {!isSameDate && "N/A"}
      {(isSameDate && showMorningRegister && !signedIn) ||
      (isSameDate && showAfternoonRegister && !signedIn) ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <NotSignedInButton
              type="button"
              onClick={confirmUpdateRegistrationStatus}
            >
              &#10006;
            </NotSignedInButton>
          )}
        </>
      ) : (isSameDate && showMorningRegister && signedIn) ||
        (isSameDate && showAfternoonRegister && signedIn) ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <IsSignedInButton
              type="button"
              onClick={confirmUpdateRegistrationStatus}
            >
              &#10004;
            </IsSignedInButton>
          )}
        </>
      ) : (isSameDate && !showMorningRegister) ||
        (isSameDate && !showAfternoonRegister) ? (
        "N/A"
      ) : null}
    </>
  );
};

export default SignInRegistrationButtonCell;
