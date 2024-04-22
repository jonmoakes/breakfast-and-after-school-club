import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../../styles/span/span.styles";

const UpdateBookingClosingTimesInstructions = ({ sessionType }) => (
  <>
    <BlackHr />
    <Text>
      to update this value in the database, enter in the new time into the input
      below and then tap the 'upload new time' button when it appears.
    </Text>
    <Text>
      this will set the new latest time that a user is allowed to book or cancel
      a session in the {sessionType} ( for bookings on the current date ).
    </Text>
    <Text>
      please enter in the following format using the 24 hour clock:
      <br />
      <RedSpan>
        HH:<LowercasedSpan>mm</LowercasedSpan>
      </RedSpan>
    </Text>
  </>
);

export default UpdateBookingClosingTimesInstructions;
