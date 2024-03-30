import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import { bookSessionRoute } from "../../strings/routes/routes-strings";

const NoBookingsFound = () => {
  const { noBookingDataFound } = useBookedSessionsUserFunctions();

  return (
    <>
      {noBookingDataFound() ? (
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
