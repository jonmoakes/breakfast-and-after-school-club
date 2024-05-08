import { getSessionTypeString } from "../../functions/get-session-type-string";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const CancelBookingSessionDetails = ({
  sessionDate,
  typeOfSession,
  numberOfChildrenInBooking,
  sessionChildren,
  userIdOfParent,
}) => (
  <>
    <Text>
      are these the correct date, session type and names of the children in the
      booking that you wish to cancel?
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
    <BlackHr />
  </>
);

export default CancelBookingSessionDetails;
