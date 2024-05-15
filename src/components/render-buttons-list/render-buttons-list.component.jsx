import Balancer from "react-wrap-balancer";

import { ColumnDiv } from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const RenderButtonsList = ({ buttons }) => (
  <>
    {buttons.map((button) => {
      const { id, heading, text, onClick } = button;

      return (
        <ColumnDiv key={id}>
          {heading ? (
            <Balancer>
              <BlueH2>{heading}</BlueH2>
            </Balancer>
          ) : null}
          <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
          <BlackHr />
        </ColumnDiv>
      );
    })}
  </>
);

export default RenderButtonsList;
