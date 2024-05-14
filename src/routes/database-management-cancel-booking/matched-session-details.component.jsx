import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

import { getSessionTypeString } from "../../functions/get-session-type-string";

const MatchedSessionDetails = () => {
  const {
    matchedBookingFound,
    typeOfSession,
    numberOfChildrenInBooking,
    sessionChildren,
    userIdOfParent,
    bookingId,
    formattedDate,
  } = useDbManageCancelBookingVariables();

  return (
    <>
      {matchedBookingFound ? (
        <ParentDiv>
          <Text>
            are these the correct date, session type and number of children in
            the booking that you wish to cancel?
          </Text>
          <BlackHr />
          <BlueH2>date of booking:</BlueH2>
          <Text>
            <RedSpan>{formattedDate}</RedSpan>
          </Text>
          <BlueH2>session type</BlueH2>
          <Text>
            <RedSpan>{getSessionTypeString(typeOfSession)}</RedSpan>
          </Text>
          <BlueH2>number of children in the booking:</BlueH2>
          <Text>
            <RedSpan>{numberOfChildrenInBooking}</RedSpan>
          </Text>
          <Text>( {sessionChildren} )</Text>
          <BlackHr />
          <Text>
            other details:
            <br />
            (you shouldn't need these unless there is an error when trying to
            cancel the booking. )
          </Text>
          <BlueH2>parents user id </BlueH2>
          <Text>
            <RedSpan>{userIdOfParent}</RedSpan>
          </Text>
          <BlueH2>booking Id</BlueH2>
          <Text>
            <RedSpan>{bookingId}</RedSpan>
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default MatchedSessionDetails;
