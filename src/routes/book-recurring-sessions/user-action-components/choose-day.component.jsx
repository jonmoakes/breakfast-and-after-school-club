import Balancer from "react-wrap-balancer";

import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useDayAndSessionChoiceButtons from "../hooks/use-day-and-session-choice-buttons";

import RenderButtonsList from "../../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const ChooseDay = () => {
  const { dayChoice } = useBookRecurringSessionsVariables();
  const { dayChoiceButtons } = useDayAndSessionChoiceButtons();

  return (
    <>
      {!dayChoice ? (
        <ParentDiv className="left">
          <BlueH2>
            <Balancer>I want sessions on a:</Balancer>
          </BlueH2>
          <RenderButtonsList {...{ buttons: dayChoiceButtons }} />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChooseDay;
