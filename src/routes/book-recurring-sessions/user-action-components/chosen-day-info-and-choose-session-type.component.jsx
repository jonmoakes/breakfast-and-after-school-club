import Balancer from "react-wrap-balancer";

import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";
import useDayAndSessionChoiceButtons from "../hooks/use-day-and-session-choice-buttons";

import RenderButtonsList from "../../../components/render-buttons-list/render-buttons-list.component";

import { MinimalButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const ChosenDayInfoAndChooseSessionType = () => {
  const { dayChoice } = useBookRecurringSessionsVariables();
  const { resetDayAndSessionChoices } = useRecurringSessionsFunctions();
  const { sessionChoiceButtons } = useDayAndSessionChoiceButtons();

  return (
    <>
      {dayChoice ? (
        <ParentDiv className="bounce">
          <Text>
            you have chosen a:
            <br />
            <RedSpan>{dayChoice}</RedSpan>
          </Text>
          <MinimalButton onClick={resetDayAndSessionChoices}>
            change day
          </MinimalButton>
          <BlackHr />

          <BlueH2>
            <Balancer>i want sessions in the:</Balancer>
          </BlueH2>
          <RenderButtonsList {...{ buttons: sessionChoiceButtons }} />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChosenDayInfoAndChooseSessionType;
