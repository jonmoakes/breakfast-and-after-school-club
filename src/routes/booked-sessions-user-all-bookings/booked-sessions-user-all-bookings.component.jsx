import useFetchBookedSessionsUserAllBookingsAndBookingClosingTimesThunkUseEffect from "../../hooks/get-actions-and-thunks/booked-sessions-user-actions-and-thunks/use-fetch-booked-sessions-user-all-bookings-and-booking-closing-times-thunk-use-effect";
import useBookedSessionsUserAllBookingsVariables from "./booked-sessions-user-all-bookings-hooks/use-booked-sessions-user-all-bookings-variables";

import BookedSessionsUserAllBookingsTitleAndHelp from "./booked-sessions-user-all-bookings-title-and-help.component";

import Loader from "../../components/loader/loader.component";
import BookedSessionsUserAllBookingsTable from "./booked-sessions-user-all-bookings-table.component";

import { Container } from "../../styles/container/container.styles";

const BookedSessionsUserAllBookings = () => {
  useFetchBookedSessionsUserAllBookingsAndBookingClosingTimesThunkUseEffect();
  const { bookedSessionsUserIsLoading } =
    useBookedSessionsUserAllBookingsVariables();

  return (
    <Container>
      {bookedSessionsUserIsLoading ? (
        <Loader />
      ) : (
        <>
          <BookedSessionsUserAllBookingsTitleAndHelp />
          <BookedSessionsUserAllBookingsTable />
        </>
      )}
    </Container>
  );
};

export default BookedSessionsUserAllBookings;
