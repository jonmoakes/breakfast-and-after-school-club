import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import { bookSessionRoute } from "../../strings/routes/routes-strings";
import useBookedSessionsUserLogic from "./booked-sessions-user-hooks/logic/use-booked-sessions-user-logic";

const NoBookingsFound = ({ data }) => {
  const { noBookingDataFound } = useBookedSessionsUserLogic();

  return (
    <>
      {noBookingDataFound(data) ? (
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
