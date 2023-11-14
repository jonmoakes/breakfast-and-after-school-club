import { useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { selectUserBookings } from "../../../store/user-bookings/user-bookings.selector";

import {
  confirmSureBookSession,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/strings";

const useCheckForPreviousBookingAndHandleBooking = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useConditionalLogic();
  const {
    singleChildSessionAlreadyBookedSwal,
    multipleChildSessionAlreadyBookedSwal,
  } = useSessionAlreadyBookedSwal();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const usersChildren = useSelector(selectUsersChildren);
  const userBookings = useSelector(selectUserBookings);

  const { childName } = usersChildren[0];

  const checkForPreviousBookingAndHandleBooking = (
    sessionType,
    price,
    confirmResult
  ) => {
    const userBookingsDatesAndNames = userBookings.map((userBooking) => {
      const date = userBooking.date;
      const childrensName = userBooking.childrensName;
      const sessionType = userBooking.sessionType;

      return { date, childrensName, sessionType };
    });

    let matchingChildName = null;

    const checkIfSessionIsBooked = () => {
      const multipleChildBookingIncludesChildAlreadyBooked =
        userBookingsDatesAndNames.some((userBooking) => {
          const isMatch =
            userBooking.date === date &&
            childrenSelectedForBooking.includes(userBooking.childrensName) &&
            userBooking.sessionType === sessionType;

          if (isMatch) {
            matchingChildName = userBooking.childrensName;
          }

          return isMatch;
        });

      const singleChildAlreadyBookedForThisDay = userBookingsDatesAndNames.some(
        (userBooking) =>
          userBooking.date === date &&
          userBooking.childrensName === childName &&
          userBooking.sessionType === sessionType
      );

      return {
        multipleChildBookingIncludesChildAlreadyBooked,
        singleChildAlreadyBookedForThisDay,
      };
    };

    const {
      multipleChildBookingIncludesChildAlreadyBooked,
      singleChildAlreadyBookedForThisDay,
    } = checkIfSessionIsBooked();

    if (
      !childrenSelectedForBooking.length &&
      singleChildAlreadyBookedForThisDay
    ) {
      singleChildSessionAlreadyBookedSwal(sessionType, childName);
    } else if (
      childrenSelectedForBooking.length &&
      multipleChildBookingIncludesChildAlreadyBooked
    ) {
      multipleChildSessionAlreadyBookedSwal(sessionType, matchingChildName);
    } else {
      confirmSwal(
        confirmSureBookSession(sessionType, date),
        fundsDeductedFromBalance(price),
        imSureMessage,
        () => confirmResult(sessionType, price)
      );
    }
  };

  return { checkForPreviousBookingAndHandleBooking };
};

export default useCheckForPreviousBookingAndHandleBooking;
