import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { RedText, Text } from "../../styles/p/p.styles";

const TwoHundredPlusChildren = () => (
  <ParentDiv>
    <BlackHr />
    <BlueH2>200 + children:</BlueH2>

    <Text>monthly:</Text>
    <RedText>£300 per month</RedText>
    <Text>yearly ( 10% discount - saving £360 per year! ):</Text>
    <RedText>£3240 per year</RedText>
    <BlackHr />
  </ParentDiv>
);

export default TwoHundredPlusChildren;
