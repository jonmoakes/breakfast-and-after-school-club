import { useSelector } from "react-redux";

import {
  selectUserBookings,
  selectGetUserBookingsError,
} from "../../store/user-bookings/user-bookings.selector";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import { bookSessionRoute } from "../../strings/strings";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

const NoBookingsFound = ({ data }) => {
  const userBookings = useSelector(selectUserBookings);
  const userBookingsError = useSelector(selectGetUserBookingsError);

  const noBookingDataFound = () => {
    return !userBookings.length && !data.length ? true : false;
  };

  return (
    <>
      {userBookingsError ? (
        <ShowFetchErrors />
      ) : noBookingDataFound() ? (
        <ParentDiv>
          <BlueH2>no bookings.</BlueH2>
          <Text>you haven't made any bookings yet.</Text>
          <Text>
            <StyledLink to={bookSessionRoute}>book a session</StyledLink>, then
            return here to view your bookings.
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoBookingsFound;
