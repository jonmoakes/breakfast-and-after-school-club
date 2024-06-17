import useBookedSessionsOwnerFunctions from "./booked-sessions-owner-hooks/use-booked-sessions-owner-functions";

import NoSessionsBookedYet from "../../components/tables/no-sessions-booked-yet.component";

import { GreyButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const NoBookingDataFound = ({ data }) => {
  const { noSessionsBookedYet, noDataFound, showAllBookings } =
    useBookedSessionsOwnerFunctions();

  return (
    <>
      {noSessionsBookedYet() ? (
        <NoSessionsBookedYet />
      ) : noDataFound(data) ? (
        <ParentDiv>
          <BlueH2>no bookings found for today</BlueH2>
          <Text>
            tap the button below to show bookings from todays date onwards.
          </Text>
          <GreyButton onClick={showAllBookings}>
            show future bookings
          </GreyButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoBookingDataFound;
