import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";

const BookableDatesInfo = () => {
  const { dayChoice, monthAsString } = useBookRecurringSessionsVariables();
  const { formattedSessionChoiceString } = useRecurringSessionsFunctions();

  return (
    <Text>
      these are the available dates that we have for{" "}
      <RedSpan>{dayChoice}s</RedSpan> with the{" "}
      <RedSpan>{formattedSessionChoiceString()}</RedSpan> session for{" "}
      <RedSpan>{monthAsString}</RedSpan>:
    </Text>
  );
};

export default BookableDatesInfo;
