import BookingsTable from "./bookings-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import useGetBookedSessions from "./dashboard-hooks/use-get-booked-sessions";

const Dashboard = () => {
  useGetBookedSessions();
  return (
    <Container>
      <ParentDiv>
        <BlackTitle>dashboard</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <BlueH2>what would you like to do?</BlueH2>
      </ParentDiv>

      <BookingsTable />
    </Container>
  );
};

export default Dashboard;
