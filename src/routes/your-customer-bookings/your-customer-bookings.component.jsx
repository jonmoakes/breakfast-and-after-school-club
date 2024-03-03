import { useSelector } from "react-redux";

import useFetchBookedSessionsOwner from "./your-customer-bookings-hooks/use-fetch-booked-sessions-owner";

import { selectBookedSessionsOwnerSelectors } from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import BookingsTable from "./your-customer-bookings-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const YourCustomerBookings = () => {
  useFetchBookedSessionsOwner();

  const { bookedSessionsOwnerIsLoading } = useSelector(
    selectBookedSessionsOwnerSelectors
  );

  return (
    <Container>
      {bookedSessionsOwnerIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>session bookings</BlackTitle>
        <TableHelp />
      </ParentDiv>
      <BookingsTable />
    </Container>
  );
};

export default YourCustomerBookings;
