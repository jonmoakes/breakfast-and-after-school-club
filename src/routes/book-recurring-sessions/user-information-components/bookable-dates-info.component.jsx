import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";

import NoSessionsLeftInMonth from "./no-sessions-left-in-month.component";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const BookableDatesInfo = () => {
  const { dayChoice, monthAsString } = useBookRecurringSessionsVariables();
  const {
    formattedSessionChoiceString,
    noMorningSessions,
    noAfternoonSessions,
  } = useRecurringSessionsFunctions();

  return (
    <>
      {noMorningSessions() || noAfternoonSessions() ? (
        <NoSessionsLeftInMonth />
      ) : (
        <Text>
          these are the available dates that we have for{" "}
          <RedSpan>{dayChoice}s</RedSpan> with the{" "}
          <RedSpan>{formattedSessionChoiceString()}</RedSpan> session for{" "}
          <RedSpan>{monthAsString}</RedSpan>:
        </Text>
      )}
    </>
  );
};

export default BookableDatesInfo;
