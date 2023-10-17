import useGetUserBookings from "./user-bookings-hooks/use-get-user-bookings";

import TableHelp from "../../components/tables/table-help.component";
import UserBookingsTable from "./user-bookings-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UserBookings = () => {
  useGetUserBookings();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>booked sessions</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <UserBookingsTable />
    </Container>
  );
};

export default UserBookings;
