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
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking,
    sessionChildren,
    userIdOfParent,
  } = useDbManageCancelBookingVariables();

  return (
    <>
      {matchedBookingFound ? (
        <ParentDiv>
          <Text>
            are these the correct date, session type and names of the children
            in the booking that you wish to cancel?
          </Text>
          <BlackHr />
          <BlueH2>date of booking:</BlueH2>
          <Text>
            <RedSpan>{sessionDate}</RedSpan>
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
          <BlueH2>parents user id </BlueH2>
          <Text>
            <RedSpan>{userIdOfParent}</RedSpan>
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default MatchedSessionDetails;
