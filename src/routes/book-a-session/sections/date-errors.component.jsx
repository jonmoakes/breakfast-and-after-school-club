import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { WarningDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const DateErrors = () => {
  const { dateUnavailable, dateChosenInThePast, earlyFinishDates, isToday } =
    useConditionalLogic();

  return (
    <>
      {dateUnavailable() ? (
        <WarningDiv>
          <Text>
            sorry, there are no sessions available{" "}
            {isToday() ? "today" : "for this day"}.
          </Text>
        </WarningDiv>
      ) : dateChosenInThePast() ? (
        <WarningDiv>
          <Text>
            you have chosen a date that is in the past. please try again.
          </Text>
        </WarningDiv>
      ) : earlyFinishDates() ? (
        <WarningDiv>
          <Text>
            please note, we close at 1:30pm on this date which is why no
            afternoon sessions are available.
          </Text>
        </WarningDiv>
      ) : null}
    </>
  );
};

export default DateErrors;
