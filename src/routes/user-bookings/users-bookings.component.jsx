import { useSelector } from "react-redux";

import useGetUserBookings from "./user-bookings-hooks/use-get-user-bookings";

import { selectIsLoading } from "../../store/user-bookings/user-bookings.selector";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import UserBookingsTable from "./user-bookings-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UserBookings = () => {
  useGetUserBookings();

  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>booked sessions</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <UserBookingsTable />
    </Container>
  );
};

export default UserBookings;
