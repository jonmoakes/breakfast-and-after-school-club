import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const NoUpcomingBookingsFound = () => {
  const { noUpcomingBookingsFound, showAllBookings } =
    useBookedSessionsUserFunctions();

  return (
    <>
      {noUpcomingBookingsFound() ? (
        <ParentDiv>
          <BlueH2>no upcoming bookings found.</BlueH2>
          <Text>you have no upcoming bookings.</Text>
          <Text>
            tap the 'show past bookings' button to view you bookings you have
            previously made.
          </Text>

          <GreyButton onClick={showAllBookings}>show past bookings</GreyButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoUpcomingBookingsFound;
