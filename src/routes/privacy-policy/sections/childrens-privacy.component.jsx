import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const ChildrensPrivacy = () => (
  <ParentDiv>
    <BlueH2>childrens privacy:</BlueH2>
    <Text>
      Our app collects personal information about children only with parental
      consent and for the purpose of managing bookings and ensuring their safety
      at the clubs.
    </Text>
    <Text>We comply with the UK GDPR and the Data Protection Act 2018.</Text>
  </ParentDiv>
);

export default ChildrensPrivacy;
