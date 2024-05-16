import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { RedText, Text } from "../../styles/p/p.styles";

const FiftyToOneNineNineChildren = () => (
  <ParentDiv>
    <BlackHr />
    <BlueH2>50 - 199 children:</BlueH2>

    <Text>monthly:</Text>
    <RedText>£230 per month</RedText>
    <Text>yearly ( 10% discount - saving £276 per year! ):</Text>
    <RedText>£2484 per year</RedText>
    <BlackHr />
  </ParentDiv>
);

export default FiftyToOneNineNineChildren;
