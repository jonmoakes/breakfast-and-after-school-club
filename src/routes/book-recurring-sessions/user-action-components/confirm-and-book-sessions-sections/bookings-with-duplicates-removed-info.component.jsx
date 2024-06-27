import { Fragment } from "react";
import { ParentDiv } from "../../../../styles/div/div.styles";
import { Text } from "../../../../styles/p/p.styles";
import { RedSpan } from "../../../../styles/span/span.styles";
import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { StyledLink } from "../../../../styles/link/link.styles";
import { bookedSessionsOwnerRoute } from "../../../../strings/routes/routes-strings";

import { format } from "date-fns";
import useRecurringSessionsFunctions from "../../hooks/use-recurring-sessions-functions";
import useBookRecurringSessionsVariables from "../../hooks/use-book-recurring-sessions-variables";
import NoDatesFound from "../../user-information-components/no-dates-found.component";

const BookingsWithDuplicatesRemovedInfo = () => {
  const { totalCost, bookSessions } = useRecurringSessionsFunctions();
  const { sessionChoice, showConfirmButton, bookingsToAdd } =
    useBookRecurringSessionsVariables();

  return (
    <>
      {!totalCost() ? (
        <NoDatesFound />
      ) : (
        <ParentDiv className="bounce">
          <Text>
            you have already booked one or more of the above sessions.
          </Text>
          <Text>
            would you like to book the sessions with any you have booked
            previously removed?
          </Text>
          <Text>
            this will mean you will now be booking the following dates in the{" "}
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
          {!showConfirmButton ? (
            <>
              <Text>the total price will now be:</Text>
              <Text>
                <RedSpan>£{(totalCost() / 100).toFixed(2)}</RedSpan>
              </Text>

              <YellowGreenButton onClick={bookSessions}>
                book sessions
              </YellowGreenButton>

              <Text>
                if not, you can choose another day and / or session choice, or
                tap <StyledLink to={bookedSessionsOwnerRoute}>here</StyledLink>{" "}
                to return to your bookings page.
              </Text>
            </>
          ) : null}
        </ParentDiv>
      )}
    </>
  );
};

export default BookingsWithDuplicatesRemovedInfo;
