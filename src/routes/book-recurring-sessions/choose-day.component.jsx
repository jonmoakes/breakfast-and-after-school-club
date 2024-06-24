import Balancer from "react-wrap-balancer";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const ChooseDay = ({ dayChoice, dayChoiceButtons, resetChoices }) => (
  <>
    {!dayChoice ? (
      <ParentDiv>
        <BlueH2>
          <Balancer>I want sessions on a:</Balancer>
        </BlueH2>
        <RenderButtonsList {...{ buttons: dayChoiceButtons }} />
      </ParentDiv>
    ) : null}
  </>
);

export default ChooseDay;
