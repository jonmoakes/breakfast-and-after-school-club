import Balancer from "react-wrap-balancer";

import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";
import useDayAndSessionChoiceButtons from "../../../hooks/use-day-and-session-choice-buttons";

import DayChoiceInfo from "./day-choice-info.component";
import NamesOfChildrenInSessionInfo from "./names-of-children-in-session-info.component";
import RenderButtonsList from "../../../../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../../../../styles/div/div.styles";
import { BlueH2 } from "../../../../../styles/h2/h2.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";

const ChosenDayInfoAndChooseSessionType = () => {
  const { dayChoice } = useBookRecurringSessionsVariables();
  const { sessionChoiceButtons } = useDayAndSessionChoiceButtons();

  return (
    <>
      {dayChoice ? (
        <ParentDiv className="bounce">
          <DayChoiceInfo />
          <NamesOfChildrenInSessionInfo />
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
