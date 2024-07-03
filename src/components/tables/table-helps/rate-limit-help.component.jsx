import { useLocation } from "react-router-dom";

import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetbookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";

import { StyledLink } from "../../../styles/link/link.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

import {
  bookedSessionsOwnerRoute,
  contactRoute,
} from "../../../strings/routes/routes-strings";

import { standardRateLimit, highRateLimit } from "../../../constants/constants";
import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";

const RateLimitHelp = () => {
  const { bookedSessionsUser } = useGetBookedSessionsUserSelectors();
  const { bookedSessionsOwner } = useGetbookedSessionsOwnerSelectors();

  const location = useLocation();
  const path = location.pathname;

  const userBookingsLengthReached =
    bookedSessionsUser.length === standardRateLimit && true;

  const userBookingsAllBookingsLengthReached =
    bookedSessionsUser.length === highRateLimit && true;

  const ownerBookingsLengthReached =
    bookedSessionsOwner.length === standardRateLimit && true;

  const ownerBookingsAllBookingsLengthReached =
    bookedSessionsOwner.length === highRateLimit && true;

  return (
    <>
      {userBookingsLengthReached ||
      userBookingsAllBookingsLengthReached ||
      ownerBookingsLengthReached ||
      ownerBookingsAllBookingsLengthReached ? (
        <>
          <BlueH2>number of bookings:</BlueH2>
          <Text>
            please note that the maximum number of bookings you can see on this
            page is{" "}
            {path === bookedSessionsUserRoute ||
            path === bookedSessionsOwnerRoute
              ? standardRateLimit
              : highRateLimit}
            .
          </Text>
          <Text>this is for database performance reasons.</Text>
          <Text>we have prioritised bookings closest to the current date.</Text>
          <Text>
            if you would like to see details of the rest of your bookings,
            please <StyledLink to={contactRoute}>contact us</StyledLink>
          </Text>
          <Text>
            note however that these currently unseen bookings will appear as the
            days advance.
          </Text>
          <Text>
            if you have for example 2 sessions booked for today, those sessions
            will disappear from this table tomorrow and be replaced by the next
            2 furthest bookings away etc.
          </Text>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default RateLimitHelp;
