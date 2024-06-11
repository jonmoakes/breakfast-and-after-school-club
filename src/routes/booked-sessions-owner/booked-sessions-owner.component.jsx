import useFetchBookedSessionsOwnerFromTodayOnwardsThunkUseEffect from "../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-fetch-booked-sessions-owner-from-today-onwards-thunk-use-effect";
import useBookedSessionsOwnerVariables from "./booked-sessions-owner-hooks/use-booked-sessions-owner-variables";

import Loader from "../../components/loader/loader.component";
import BookedSessionsOwnerTitleAndHelp from "./booked-sessions-owner-title-and-help.component";
import BookedSessionsOwnerTable from "./booked-sessions-owner-table.component";

import { Container } from "../../styles/container/container.styles";

const BookedSessionsOwner = () => {
  useFetchBookedSessionsOwnerFromTodayOnwardsThunkUseEffect();
  const { bookedSessionsOwnerIsLoading } = useBookedSessionsOwnerVariables();

  return (
    <Container>
      {bookedSessionsOwnerIsLoading ? (
        <Loader />
      ) : (
        <>
          <BookedSessionsOwnerTitleAndHelp />
          <BookedSessionsOwnerTable />
        </>
      )}
    </Container>
  );
};

export default BookedSessionsOwner;
