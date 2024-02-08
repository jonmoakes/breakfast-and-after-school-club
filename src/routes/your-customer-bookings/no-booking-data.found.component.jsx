import { useSelector, useDispatch } from "react-redux";

import {
  setShowAllDates,
  selectBookedSessionsSelectors,
} from "../../store/booked-sessions/booked-sessions.slice";

import { contactRoute } from "../../strings/strings";
import {
  GreyButton,
  YellowGreenButton,
} from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

const NoBookingDataFound = ({ data }) => {
  const { bookedSessions } = useSelector(selectBookedSessionsSelectors);
  const dispatch = useDispatch();

  const noBookingDataFound = () => {
    return !bookedSessions.length && !data.length ? true : false;
  };

  const noBookingDataFoundForCurrentDate = () => {
    return bookedSessions.length && !data.length ? true : false;
  };

  return (
    <>
      {noBookingDataFound() ? (
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
      ) : noBookingDataFoundForCurrentDate() ? (
        <ParentDiv>
          <BlueH2>no data found for today</BlueH2>
          <Text>
            tap the button below to show bookings for all other dates.
          </Text>
          <GreyButton onClick={() => dispatch(setShowAllDates(true))}>
            show all bookings
          </GreyButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoBookingDataFound;
