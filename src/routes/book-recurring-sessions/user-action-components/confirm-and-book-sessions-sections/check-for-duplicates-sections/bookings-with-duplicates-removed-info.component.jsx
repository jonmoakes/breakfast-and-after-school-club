import { Fragment } from "react";
import { ParentDiv } from "../../../../../styles/div/div.styles";
import { Text } from "../../../../../styles/p/p.styles";
import {
  BlackSpan,
  LowercasedSpan,
  RedSpan,
} from "../../../../../styles/span/span.styles";
import { YellowGreenButton } from "../../../../../styles/buttons/buttons.styles";
import { StyledLink } from "../../../../../styles/link/link.styles";
import { bookedSessionsOwnerRoute } from "../../../../../strings/routes/routes-strings";

import { format } from "date-fns";
import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";
import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";
import NoDatesFound from "../../../user-information-components/no-dates-found.component";

import { removeStarFromChildrensNamesIfExists } from "../../../../../functions/remove-star-from-childrens-name-if-exists";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../../../styles/h2/h2.styles";
import Balancer from "react-wrap-balancer";
import {
  BlackListItem,
  StyledUnorderedList,
} from "../../../../../styles/ul/ul.styles";

const BookingsWithDuplicatesRemovedInfo = () => {
  const { totalCost, bookSessions, hasMoreThanOneChild } =
    useRecurringSessionsFunctions();
  const {
    sessionChoice,
    showConfirmButton,
    bookingsToAdd,
    childrensNamesInBooking,
  } = useBookRecurringSessionsVariables();

  return (
    <>
      {!totalCost() ? (
        <NoDatesFound />
      ) : (
        <ParentDiv className="bounce">
          {hasMoreThanOneChild() ? (
            <>
              <Text>
                at least one of your children is already booked into one or more
                of the sessions in the above list.
              </Text>
              <Text>
                would you like to remove the session(
                <LowercasedSpan>s</LowercasedSpan>) and just booked the
                remaining ones?
              </Text>
            </>
          ) : (
            <Text>
              you have already booked one or more of the above sessions .
            </Text>
          )}

          <BlueH2>summary:</BlueH2>
          <BlackHr />
          <Text>
            this means that you will now be booking the following dates:
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
            {hasMoreThanOneChild() ? (
              <>
                <BlackHr />
                for the following children:
                <RedSpan>
                  <br />
                  {removeStarFromChildrensNamesIfExists(
                    childrensNamesInBooking
                  )}
                </RedSpan>
                <br />
              </>
            ) : null}{" "}
            <BlackHr />
            <br />
            <BlackSpan>in the</BlackSpan> <RedSpan>{sessionChoice}</RedSpan>{" "}
            session.
          </Text>
          {!showConfirmButton ? (
            <>
              <BlackHr />
              <Text>
                the total price will now be:
                <br />
                <RedSpan>£{(totalCost() / 100).toFixed(2)}</RedSpan>
              </Text>
              <BlackHr />
              <Text>
                if you're happy with this, please tap the button below.
              </Text>
              <Text>
                you will get a confirmation prompt before completing the
                booking.
              </Text>
              <YellowGreenButton onClick={bookSessions}>
                book sessions
              </YellowGreenButton>

              <Text>
                <Balancer>
                  otherwise, you can:
                  <br />
                  <StyledUnorderedList>
                    <BlackListItem>choose another day,</BlackListItem>
                    <BlackListItem>choose another session type,</BlackListItem>
                    {hasMoreThanOneChild() ? (
                      <BlackListItem>
                        change the children in the booking,
                      </BlackListItem>
                    ) : null}
                  </StyledUnorderedList>
                  by tapping the buttons further up, or tap{" "}
                  <StyledLink to={bookedSessionsOwnerRoute}>Here</StyledLink> to
                  return to your bookings page.
                </Balancer>
              </Text>
            </>
          ) : null}
        </ParentDiv>
      )}
    </>
  );
};

export default BookingsWithDuplicatesRemovedInfo;
