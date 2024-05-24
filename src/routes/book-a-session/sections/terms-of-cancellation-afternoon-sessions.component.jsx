import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlueSpan } from "../../../styles/span/span.styles";

const TermsOfCancellationAfternoonSessions = ({
  afternoonSessionClosingTime,
}) => {
  return (
    <>
      <BlueH2>terms of cancellation:</BlueH2>
      <Text>
        please note that once a session is booked, the latest time that it can
        be cancelled is:
        <br />
        <BlueSpan>{afternoonSessionClosingTime}PM</BlueSpan>
      </Text>
      <BlackHr />
    </>
  );
};

export default TermsOfCancellationAfternoonSessions;
