import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";
import useConditionalLogic from "../use-conditional-logic";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  selectChildrenSelectedForBooking,
  selectSessionType,
} from "../../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../../store/get-users-children/get-users-children.selector";
import { setContactFormDetailsWhenBookingError } from "../../../../store/contact-form/contact-form.slice";

import {
  addSessionBookingInfoErrorMessage,
  contactRoute,
} from "../../../../strings/strings";

const useAddSessionBookingInfoErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const { date } = useConditionalLogic();

  const currentUser = useSelector(selectCurrentUser);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const sessionType = useSelector(selectSessionType);
  const usersChildren = useSelector(selectUsersChildren);
  const dispatch = useDispatch();

  const childName = usersChildren.length ? usersChildren[0].childName : "";
  const parentEmail = usersChildren.length ? usersChildren[0].parentEmail : "";
  const parentName = usersChildren.length ? usersChildren[0].parentName : "";
  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");

  const childrenInBooking = !childrenSelectedForBooking.length
    ? childName
    : childrenSelectedForBooking.length === 1
    ? oneChildChosen
    : childrenSelectedForBooking.length > 1
    ? namesToAddToBooking
    : childrenSelectedForBooking;

  const { name, email } = currentUser;

  const SessionData = `Session Booking Data:\n\nDate:\n${date}\n\nSession:\n${sessionType}\n\nChildren In Booking:\n${childrenInBooking}\n\nParent Email:\n${parentEmail}\n\nParent Name:\n${parentName}`;

  const errorToSend = {
    name,
    email,
    message: SessionData,
  };

  // even need the swal? Just send an email to the app owner with the booking data to be manually updated?
  const addSessionBookingInfoErrorSwal = () => {
    fireSwal(
      "error",
      addSessionBookingInfoErrorMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        // send the data as an email instead of passing to the contact form
        dispatch(setContactFormDetailsWhenBookingError(errorToSend));
        resetStateAndNavigate(contactRoute);
      }
    });
  };

  return { addSessionBookingInfoErrorSwal };
};

export default useAddSessionBookingInfoErrorSwal;
