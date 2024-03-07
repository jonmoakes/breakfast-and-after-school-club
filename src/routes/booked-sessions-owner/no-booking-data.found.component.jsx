import { useSelector, useDispatch } from "react-redux";

import {
  setShowAllDates,
  selectBookedSessionsOwnerSelectors,
} from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

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
  const { bookedSessionsOwner } = useSelector(
    selectBookedSessionsOwnerSelectors
  );
  const dispatch = useDispatch();

  const noBookingDataFound = () => {
    return !bookedSessionsOwner.length && !data.length ? true : false;
  };

  const noBookingDataFoundForCurrentDate = () => {
    return bookedSessionsOwner.length && !data.length ? true : false;
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
