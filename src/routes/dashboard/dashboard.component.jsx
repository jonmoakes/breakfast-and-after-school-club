import BookingsTable from "./bookings-table.component";

import useGetBookedSessions from "./dashboard-hooks/use-get-booked-sessions";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import TableHelp from "./table-help.component";

const Dashboard = () => {
  useGetBookedSessions();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>session bookings</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <BookingsTable />
    </Container>
  );
};

export default Dashboard;
