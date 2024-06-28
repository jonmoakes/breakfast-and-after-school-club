import Balancer from "react-wrap-balancer";

import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";

import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const NoSessionsLeftInMonth = () => {
  const { dayChoice } = useBookRecurringSessionsVariables();
  const { formattedSessionChoiceString } = useRecurringSessionsFunctions();

  return (
    <>
      <BlueH2>no dates found:</BlueH2>
      <Text>
        sorry, there were no dates found for a <RedSpan>{dayChoice} </RedSpan>{" "}
        and the <RedSpan>{formattedSessionChoiceString()}</RedSpan> session.
      </Text>
      <Text>
        this can happen towards the end of the month when there are for example
        no more mondays left in the current month.
      </Text>
      <Text>
        <Balancer>please try a different day or session type.</Balancer>
      </Text>
      <Text>
        if there are still no dates found, please wait until the first day of
        the next month in order to book your recurring sessions.
      </Text>
    </>
  );
};

export default NoSessionsLeftInMonth;
