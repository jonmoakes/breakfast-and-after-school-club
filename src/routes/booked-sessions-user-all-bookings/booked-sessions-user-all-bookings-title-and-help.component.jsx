import useBookedSessionsUserAllBookingsVariables from "./booked-sessions-user-all-bookings-hooks/use-booked-sessions-user-all-bookings-variables";

import TableHelp from "../../components/tables/table-help.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { bookedSessionsUserRoute } from "../../strings/routes/routes-strings";

const BookedSessionsUserAllBookingsTitleAndHelp = () => {
  const { data } = useBookedSessionsUserAllBookingsVariables();

  return (
    <ParentDiv>
      <BlackTitle>all booked sessions</BlackTitle>
      {data.length ? <TableHelp /> : null}
      <Text>this table shows all bookings you have ever made.</Text>
      <Text>
        if you want to see just bookings from the current day onwards, tap the
        link below.
      </Text>
      <Text>
        <StyledLink to={bookedSessionsUserRoute}>
          view upcoming bookings
        </StyledLink>
        .
      </Text>
    </ParentDiv>
  );
};

export default BookedSessionsUserAllBookingsTitleAndHelp;
