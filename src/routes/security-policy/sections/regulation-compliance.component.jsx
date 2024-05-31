import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const RegulationCompliance = () => (
  <ParentDiv>
    <BlueH2>
      <Balancer>Compliance with Regulations</Balancer>
    </BlueH2>

    <Text>
      <RedSpan>Legal Compliance:</RedSpan>
    </Text>

    <Text>
      <Balancer>
        We comply with all applicable data protection laws and regulations,
        including the UK GDPR and the Data Protection Act 2018. We continuously
        monitor changes in legislation and update our practices accordingly to
        ensure ongoing compliance.
      </Balancer>
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default RegulationCompliance;
