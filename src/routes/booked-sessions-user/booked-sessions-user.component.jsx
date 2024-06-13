import useFetchBookedSessionsUserFromTodayOnwardsAndBookingClosingTimesThunkUseEffect from "../../hooks/get-actions-and-thunks/booked-sessions-user-actions-and-thunks/use-fetch-booked-sessions-user-from-today-onwards-and-booking-closing-times-thunk-use-effect";
import useGetBookedSessionsUserSelectors from "../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetRequestDateDataSelectors from "../../hooks/get-selectors/use-get-request-date-data-selectors";

import Loader from "../../components/loader/loader.component";
import BookedSessionsUserTitleAndHelp from "./booked-sessions-user-title-and-help.component";
import BookedSessionsUserTable from "./booked-sessions-user-table.component";

import { Container } from "../../styles/container/container.styles";

const BookedSessionsUser = () => {
  useFetchBookedSessionsUserFromTodayOnwardsAndBookingClosingTimesThunkUseEffect();
  const { bookedSessionsUserIsLoading } = useGetBookedSessionsUserSelectors();
  const { requestDateDataIsLoading } = useGetRequestDateDataSelectors();

  return (
    <Container>
      {bookedSessionsUserIsLoading || requestDateDataIsLoading ? (
        <Loader />
      ) : (
        <>
          <BookedSessionsUserTitleAndHelp />
          <BookedSessionsUserTable />
        </>
      )}
    </Container>
  );
};

export default BookedSessionsUser;
