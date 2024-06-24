import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const BookableDatesInfo = ({
  dayChoice,
  formattedSessionChoiceString,
  monthAsString,
}) => (
  <Text>
    these are the available dates that we have for{" "}
    <RedSpan>{dayChoice}'s</RedSpan> with the{" "}
    <RedSpan>{formattedSessionChoiceString()}</RedSpan> session for{" "}
    <RedSpan>{monthAsString}</RedSpan>:
  </Text>
);

export default BookableDatesInfo;
