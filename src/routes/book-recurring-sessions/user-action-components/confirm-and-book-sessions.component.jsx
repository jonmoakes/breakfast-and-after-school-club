import { Fragment, useState } from "react";
import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";
import useDispatchBookRecurringSessionsThunks from "../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-dispatch-book-recurring-sessions-thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { bookedSessionsOwnerRoute } from "../../../strings/routes/routes-strings";
import { fundsDeductedFromBalance } from "../../../strings/confirms/confirms-strings";

const ConfirmAndBookSessions = () => {
  const { walletBalance } = useGetCurrentUserSelectors();

  const { totalCost } = useRecurringSessionsFunctions();
  let { bookingData } = useRecurringSessionsFunctions();
  const { numberOfChildrenInBooking, sessionChoice, bookedSessionsUser } =
    useBookRecurringSessionsVariables();

  const { confirmSwal } = useConfirmSwal();

  const { dispatchBookRecurringSessionsThunks } =
    useDispatchBookRecurringSessionsThunks();

  const [bookingsToAdd, setBookingsToAdd] = useState(bookingData);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const checkForDuplicateBookings = () => {
    const bookedSessionUserDatesAndSessionTypes = bookedSessionsUser.map(
      (booking) => ({ date: booking.date, sessionType: booking.sessionType })
    );

    const bookingsUserWantsToBookDatesAndSessionTypes = bookingData.map(
      (booking) => ({ date: booking.date, sessionType: sessionChoice })
    );

    const userHasAlreadyBookedOneOfTheSessions =
      bookingsUserWantsToBookDatesAndSessionTypes.filter((wantedBooking) =>
        bookedSessionUserDatesAndSessionTypes.some(
          (bookedBooking) =>
            bookedBooking.date === wantedBooking.date &&
            bookedBooking.sessionType === wantedBooking.sessionType
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
      setBookingsToAdd(filteredBookings);
      setShowHelp(true);
      setShowConfirmButton(false);
    } else {
      setShowHelp(false);
      setShowConfirmButton(true);
    }
  };

  const bookSessions = () => {
    const confirmResult = () => {
      bookingData = bookingsToAdd;
      const sessionPrice = bookingsToAdd
        ? totalCost(bookingsToAdd)
        : totalCost();

      dispatchBookRecurringSessionsThunks(
        bookingData,
        numberOfChildrenInBooking,
        sessionChoice,
        sessionPrice
      );
    };

    const cost = bookingsToAdd ? totalCost(bookingsToAdd) : totalCost();
    const balanceAfterBooking = ((walletBalance - cost) / 100).toFixed(2);

    confirmSwal(
      "book these sessions?",
      fundsDeductedFromBalance(cost, balanceAfterBooking),
      "yes",
      confirmResult
    );
  };

  return (
    <>
      {showHelp && walletBalance > totalCost() ? (
        <ParentDiv className="bounce">
          <Text>
            you have already booked one or more of the above sessions.
          </Text>
          <Text>
            would you like to book the sessions with any you have booked
            previously removed?
          </Text>

          <Text>
            this will mean you will now be booking the folllowing dates in the{" "}
            {sessionChoice} session.
            <br />
            <br />
            <RedSpan>
              {bookingsToAdd.map((booking, index) => (
                <Fragment key={index}>
                  {booking
                    ? format(new Date(booking.date), "dd MMMM yyyy")
                    : ""}
                  <br />
                </Fragment>
              ))}
            </RedSpan>
          </Text>

          <Text>the total price will now be:</Text>
          <Text>
            <RedSpan>£{(totalCost(bookingsToAdd) / 100).toFixed(2)}</RedSpan>
          </Text>

          <YellowGreenButton onClick={bookSessions}>
            book sessions
          </YellowGreenButton>

          <Text>
            if not, you can choose another day and / or session choice, or tap{" "}
            <StyledLink to={bookedSessionsOwnerRoute}>here</StyledLink> to
            return to your bookings page.
          </Text>
        </ParentDiv>
      ) : walletBalance >= totalCost() ? (
        <ParentDiv className="bounce">
          <Text>
            the total cost for these bookings is:
            <br />
            <RedSpan>£{(totalCost() / 100).toFixed(2)}</RedSpan>
          </Text>

          {!showConfirmButton ? (
            <>
              <Text>
                if these dates are correct, please tap the button below to check
                for duplicate bookings.
              </Text>
              <Text>
                if none are found, you will then see the book sessions button.
              </Text>
            </>
          ) : null}

          {!showConfirmButton ? (
            <YellowGreenButton onClick={checkForDuplicateBookings}>
              check
            </YellowGreenButton>
          ) : (
            <>
              <Text>
                on completion of your booking, the above amount will be deducted
                from your wallet.
              </Text>
              <YellowGreenButton onClick={bookSessions}>book</YellowGreenButton>
            </>
          )}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ConfirmAndBookSessions;
