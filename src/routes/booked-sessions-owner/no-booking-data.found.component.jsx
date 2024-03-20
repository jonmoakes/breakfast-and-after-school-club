import useBookedSessionsOwnerActions from "../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";

import {
  GreyButton,
  YellowGreenButton,
} from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes/routes-strings";
import useBookedSessionsOwnerLogic from "./logic/use-booked-sessions-owner-logic";

const NoBookingDataFound = ({ data }) => {
  const { dispatchSetShowAllDates } = useBookedSessionsOwnerActions();
  const { noSessionsBookedYet, noDataFound } = useBookedSessionsOwnerLogic();

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
            tap the button below to show bookings for all other dates.
          </Text>
          <GreyButton onClick={() => dispatchSetShowAllDates(true)}>
            show all bookings
          </GreyButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoBookingDataFound;
