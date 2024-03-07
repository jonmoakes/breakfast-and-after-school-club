import { useSelector } from "react-redux";

import useFetchBookedSessionsUser from "./booked-sessions-user-hooks/use-fetch-booked-sessions-user";

import { selectBookedSessionsUserSelectors } from "../../store/booked-sessions-user/booked-sessions-user.slice";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import BookedSessionsUserTable from "./booked-sessions-user-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const BookedSessionsUser = () => {
  useFetchBookedSessionsUser();

  const { bookedSessionsUserIsLoading } = useSelector(
    selectBookedSessionsUserSelectors
  );

  return (
    <Container>
      {bookedSessionsUserIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>booked sessions</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <BookedSessionsUserTable />
    </Container>
  );
};

export default BookedSessionsUser;
