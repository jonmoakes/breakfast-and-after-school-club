import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../../styles/span/span.styles";

const UpdateSessionTimesInstructions = ({ sessionTime }) => (
  <>
    <BlackHr />
    <Text>
      to update this {sessionTime} session time in the database, enter in the
      new session time into the input below and then tap the 'update session
      time' button when it appears.
    </Text>
    <Text>
      this will set the new {sessionTime} session time for your users
      information.
    </Text>
    <Text>
      please enter in the following format using the 24 hour clock:
      <br />
      <RedSpan>
        HH:<LowercasedSpan>mm</LowercasedSpan>(space)-(space)HH:
        <LowercasedSpan>mm</LowercasedSpan>
      </RedSpan>
    </Text>
  </>
);

export default UpdateSessionTimesInstructions;
