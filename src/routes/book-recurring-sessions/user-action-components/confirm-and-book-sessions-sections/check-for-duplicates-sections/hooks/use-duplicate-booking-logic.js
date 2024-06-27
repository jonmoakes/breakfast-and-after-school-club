import useBookRecurringSessionsVariables from "../../../../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../../../../hooks/use-recurring-sessions-functions";

const useDuplicateBookingLogic = () => {
  const {
    bookingData,
    dispatchSetBookingsToAdd,
    dispatchSetShowHelp,
    dispatchSetShowConfirmButton,
  } = useRecurringSessionsFunctions();
  const {
    sessionChoice,

    bookedSessionsUser,
    childrensNamesInBooking,
  } = useBookRecurringSessionsVariables();

  const checkForDuplicateBookings = () => {
    const bookedSessionUserDatesAndSessionTypes = bookedSessionsUser.map(
      (booking) => ({
        date: booking.date,
        sessionType: booking.sessionType,
        childrensName: booking.childrensName.split(", "), // Split the booked children names into an array
      })
    );

    const bookingsUserWantsToBookDatesAndSessionTypes = bookingData.map(
      (booking) => ({
        date: booking.date,
        sessionType: sessionChoice,
        childrensNames: childrensNamesInBooking.split(", "), // Split the wanted children names into an array
      })
    );

    const userHasAlreadyBookedOneOfTheSessions =
      bookingsUserWantsToBookDatesAndSessionTypes.filter((wantedBooking) =>
        bookedSessionUserDatesAndSessionTypes.some(
          (bookedBooking) =>
            bookedBooking.date === wantedBooking.date &&
            bookedBooking.sessionType === wantedBooking.sessionType &&
            wantedBooking.childrensNames.some((name) =>
              bookedBooking.childrensName.includes(name)
            )
        )
      );

    const userHasAlreadyBookedOneOrMoreDates =
      userHasAlreadyBookedOneOfTheSessions.length > 0;

    if (userHasAlreadyBookedOneOrMoreDates) {
      const filteredBookings = bookingData.filter(
        (booking) =>
          !userHasAlreadyBookedOneOfTheSessions.some(
            (alreadyBooked) =>
              alreadyBooked.date === booking.date &&
              alreadyBooked.sessionType === sessionChoice
          )
      );
      dispatchSetBookingsToAdd(filteredBookings);
      dispatchSetShowHelp(true);
      dispatchSetShowConfirmButton(false);
    } else {
      dispatchSetBookingsToAdd(bookingData);
      dispatchSetShowHelp(false);
      dispatchSetShowConfirmButton(true);
    }
  };

  return { checkForDuplicateBookings };
};

export default useDuplicateBookingLogic;
