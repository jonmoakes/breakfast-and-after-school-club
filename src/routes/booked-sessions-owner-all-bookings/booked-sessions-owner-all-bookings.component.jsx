import useFetchBookedSessionsOwnerAllBookingsThunkUseEffect from "../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-fetch-booked-sessions-owner-all-bookings-thunk-use-effect";
import useBookedSessionsOwnerAllBookingsVariables from "./booked-sessions-owner-all-bookings-hooks/use-booked-sessions-owner-all-bookings-variables";

import Loader from "../../components/loader/loader.component";
import BookedSessionsOwnerAllBookingsTable from "./booked-sessions-owner-all-bookings-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { bookedSessionsOwnerRoute } from "../../strings/routes/routes-strings";
import TableHelp from "../../components/tables/table-help.component";

const BookedSessionsOwnerAllBookings = () => {
  useFetchBookedSessionsOwnerAllBookingsThunkUseEffect();
  const { bookedSessionsOwnerIsLoading, data } =
    useBookedSessionsOwnerAllBookingsVariables();

  return (
    <Container>
      {bookedSessionsOwnerIsLoading ? (
        <Loader />
      ) : (
        <>
          <ParentDiv>
            <BlackTitle>all booked sessions</BlackTitle>
            {data.length ? <TableHelp /> : null}

            <Text>this table shows all bookings ever made.</Text>
            <Text>
              if you want to see just bookings from the current day onwards, tap
              the link below.
            </Text>
            <Text>
              <StyledLink to={bookedSessionsOwnerRoute}>
                view future bookings
              </StyledLink>
            </Text>
          </ParentDiv>
          <BookedSessionsOwnerAllBookingsTable />
        </>
      )}
    </Container>
  );
};

export default BookedSessionsOwnerAllBookings;
