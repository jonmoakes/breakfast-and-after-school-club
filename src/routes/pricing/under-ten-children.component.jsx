import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { RedText } from "../../styles/p/p.styles";

const UnderTenChildren = () => (
  <ParentDiv>
    <BlackHr />
    <BlueH2>under 10 children:</BlueH2>

    <RedText>FREE!</RedText>

    <BlackHr />
  </ParentDiv>
);

export default UnderTenChildren;
