import useBookRecurringSessionsVariables from "../../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../../hooks/use-recurring-sessions-functions";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../../styles/div/div.styles";
import { Text } from "../../../../styles/p/p.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const CheckForDuplicatesAndBookIfNoneFound = () => {
  const {
    totalCost,
    bookSessions,
    bookingData,
    dispatchSetBookingsToAdd,
    dispatchSetShowHelp,
    dispatchSetShowConfirmButton,
  } = useRecurringSessionsFunctions();
  const {
    sessionChoice,
    showConfirmButton,
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
  return (
    <ParentDiv className="bounce">
      {!showConfirmButton ? (
        <>
          <Text>
            if these dates are correct, please tap the button below to check for
            duplicate bookings.
          </Text>
          <Text>
            if none are found, you will then see the book sessions button.
          </Text>
          <YellowGreenButton onClick={checkForDuplicateBookings}>
            check bookings
          </YellowGreenButton>
        </>
      ) : (
        <>
          <Text>great - no duplicate bookings were found!</Text>
          <Text>
            on completion of your booking, the amount below will be deducted
            from your wallet.
          </Text>

          <Text>
            the total cost for these bookings is:
            <br />
            <RedSpan>£{(totalCost() / 100).toFixed(2)}</RedSpan>
          </Text>
          <YellowGreenButton className="green" onClick={bookSessions}>
            book sessions
          </YellowGreenButton>
        </>
      )}
    </ParentDiv>
  );
};

export default CheckForDuplicatesAndBookIfNoneFound;
