import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { RedText, Text } from "../../styles/p/p.styles";

const TwoHundredToTwoFourNineChildren = () => (
  <ParentDiv>
    <BlackHr />
    <BlueH2>200 - 249 children:</BlueH2>

    <Text>monthly:</Text>
    <RedText>£200 per month</RedText>
    <Text>
      <Balancer>yearly ( 10% discount - saving £240 per year! )</Balancer>
    </Text>
    <RedText>£2160 per year</RedText>
    <BlackHr />
  </ParentDiv>
);

export default TwoHundredToTwoFourNineChildren;
