import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlueSpan } from "../../../styles/span/span.styles";
import {
  BlackListItem,
  StyledUnorderedList,
} from "../../../styles/ul/ul.styles";

const TermsOfCancellationAllSessions = ({
  morningSessionClosingTime,
  afternoonSessionClosingTime,
}) => {
  return (
    <>
      <BlueH2>terms of cancellation:</BlueH2>
      <Text>
        please note that once a session is booked, the latest time that it can
        be cancelled on the day of the booking is:
      </Text>
      <BlackHr />
      <StyledUnorderedList>
        <BlackListItem>morning session</BlackListItem>
        <BlackListItem>morning & afternoon Short session</BlackListItem>
        <BlackListItem>morning & afternoon long session</BlackListItem>
      </StyledUnorderedList>
      <Text>
        <BlueSpan>{morningSessionClosingTime}AM</BlueSpan>
      </Text>
      <BlackHr />
      <StyledUnorderedList>
        <BlackListItem>afternoon short session</BlackListItem>
        <BlackListItem>afternoon long session</BlackListItem>
      </StyledUnorderedList>
      <Text>
        <BlueSpan>{afternoonSessionClosingTime}PM</BlueSpan>
      </Text>
      <BlackHr />
    </>
  );
};

export default TermsOfCancellationAllSessions;
