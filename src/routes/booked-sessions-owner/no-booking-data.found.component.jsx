import useBookedSessionsOwnerFunctions from "./booked-sessions-owner-hooks/use-booked-sessions-owner-functions";

import {
  GreyButton,
  YellowGreenButton,
} from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes/routes-strings";

const NoBookingDataFound = ({ data }) => {
  const { noSessionsBookedYet, noDataFound, showAllBookings } =
    useBookedSessionsOwnerFunctions();

  return (
    <>
      {noSessionsBookedYet() ? (
        <ParentDiv>
          <BlueH2>no booking data found</BlueH2>
          <Text>
            if you think that there should be data here, please tap the button
            below to reload the page, or{" "}
            <StyledLink to={contactRoute}>contact us</StyledLink> if the problem
            persists.
          </Text>
          <YellowGreenButton onClick={() => window.location.reload()}>
            reload
          </YellowGreenButton>
        </ParentDiv>
      ) : noDataFound(data) ? (
        <ParentDiv>
          <BlueH2>no bookings found for today</BlueH2>
          <Text>
            tap the button below to show bookings from todays date onwards.
          </Text>
          <GreyButton onClick={showAllBookings}>
            show upcoming bookings
          </GreyButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoBookingDataFound;
