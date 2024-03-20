import useFetchBookedSessionsOwner from "./booked-sessions-owner-hooks/use-fetch-booked-sessions-owner";
import useGetBookedSessionOwnerSelectors from "../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import BookedSessionsOwnerTable from "./booked-sessions-owner-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const BookedSessionsOwner = () => {
  useFetchBookedSessionsOwner();
  const { bookedSessionsOwnerIsLoading } = useGetBookedSessionOwnerSelectors();

  return (
    <Container>
      {bookedSessionsOwnerIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>session bookings</BlackTitle>
        <TableHelp />
      </ParentDiv>
      <BookedSessionsOwnerTable />
    </Container>
  );
};

export default BookedSessionsOwner;
