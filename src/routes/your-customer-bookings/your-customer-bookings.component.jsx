import { useSelector } from "react-redux";

import useGetBookedSessions from "./your-customer-bookings-hooks/use-get-booked-sessions";

import { selectBookedSessionsIsLoading } from "../../store/booked-sessions/booked-sessions.slice";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import BookingsTable from "./your-customer-bookings-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const YourCustomerBookings = () => {
  useGetBookedSessions();

  const isLoading = useSelector(selectBookedSessionsIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>session bookings</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <BookingsTable />
    </Container>
  );
};

export default YourCustomerBookings;
