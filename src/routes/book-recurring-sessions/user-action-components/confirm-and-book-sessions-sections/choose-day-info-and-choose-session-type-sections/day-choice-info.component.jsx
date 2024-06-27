import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

import { MinimalButton } from "../../../../../styles/buttons/buttons.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { RedSpan } from "../../../../../styles/span/span.styles";

const DayChoiceInfo = () => {
  const { dayChoice } = useBookRecurringSessionsVariables();
  const { resetDayAndSessionChoices } = useRecurringSessionsFunctions();

  return (
    <>
      <Text>
        you have chosen a:
        <br />
        <RedSpan>{dayChoice}</RedSpan>
      </Text>
      <MinimalButton onClick={resetDayAndSessionChoices}>
        change day
      </MinimalButton>
    </>
  );
};

export default DayChoiceInfo;
