import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";

const PolicyContactInfo = () => (
  <ParentDiv>
    <BlueH2>contact information</BlueH2>
    <Text>
      <Balancer>
        For support or questions about these terms, contact us at:
        <br />
        <br />
        <LowercasedSpan>
          admin@breakfast-and-after-school-club.co.uk
        </LowercasedSpan>
      </Balancer>
    </Text>
  </ParentDiv>
);

export default PolicyContactInfo;
