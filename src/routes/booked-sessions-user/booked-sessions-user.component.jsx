import useFetchBookedSessionsUser from "./booked-sessions-user-hooks/use-fetch-booked-sessions-user";
import useGetBookedSessionsUserSelectors from "../../hooks/get-selectors/use-get-booked-sessions-user-selectors";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import BookedSessionsUserTable from "./booked-sessions-user-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import useGetRequestDateDataSelectors from "../../hooks/get-selectors/use-get-request-date-data-selectors";

const BookedSessionsUser = () => {
  useFetchBookedSessionsUser();
  const { bookedSessionsUserIsLoading } = useGetBookedSessionsUserSelectors();
  const { requestDateDataIsLoading } = useGetRequestDateDataSelectors();

  return (
    <Container>
      {bookedSessionsUserIsLoading || requestDateDataIsLoading ? (
        <Loader />
      ) : null}

      <ParentDiv>
        <BlackTitle>booked sessions</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <BookedSessionsUserTable />
    </Container>
  );
};

export default BookedSessionsUser;
